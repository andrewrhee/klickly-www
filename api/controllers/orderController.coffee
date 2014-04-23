BaseController = require './baseController.coffee'
BrainTree = require '../modules/braintree'
_ = require 'underscore'

module.exports = class OrderController extends BaseController
  model: 'order'
  restrict: (method, req, res, params) ->
    return false unless req.session.client
  
  index: (req, res, next) =>
    return next() unless req.xhr # forward on if its for html
    Model = req.models[@model]
    params = req.param('where') or {}
    if _.isString(params)
      params = @tryToParseJSON(params) or {}
    if @restrict('index', req, res, params) isnt false
      Model
        .find(params)
        .populate('product')
        .sort(@sortBy)
        .exec (err, docs) ->
          res.json docs

  checkout: (req, res) =>
    unless req.session.user
      return res.redirect "/user/login/#{req.params.id}"
    res.clearCookie 'campaign'

    req.models.user.findById req.session.user._id, (err, user) ->
      address = 
        get: -> ''
      if user.addresses.length
        address = user.addresses[0]
      res.render 'order/checkout',
        user: user
        address: address

  purchase: (req, res) =>
    unless req.session.user
      return res.send('Not Authorized',401)
    Product = req.models.product
    Order = req.models.order
    User = req.models.user

    User.findById req.session.user._id, (err, user) ->
      user.email = req.body.email if req.body.email
      if req.body['address.name'] and req.body['address.streetAddress']
        user.addresses = []
        user.addresses.push
          name: req.body['address.name']
          street1: req.body['address.streetAddress']
          street2: req.body['address.extendedAddress'] ? ''
          city: req.body['address.locality']
          state: req.body['address.region']
          postalCode: req.body['address.postalCode']
      user.save (err) ->
        return res.json(500, err) if err
        req.session.user = user
        Product.findOne({'campaigns._id': req.params.id}).populate('client').exec (err, product) ->
          return res.json(500, err) if err
          return res.json(404, {error:"Product not found"}) unless product
          address = user.addresses[0]
          order = new Order
            product: product._id
            user: user._id
            client: product.client._id
            merchantId: product.client.get('payment.braintree.id')
            status: 'pending'
            amount: product.get('price').toFixed(2)
            serviceFeeAmount: (product.get('price') * product.client.get('klicklyRate')).toFixed(2)
            address:
              name: address.name
              street1: address.street1
              street2: address.street2
              city: address.city
              state: address.state
              postalCode: address.postalCode
          order.save (err) ->
            return res.json(500, err) if err

            BrainTree.createTransaction user, order, req.body, (err, transaction) ->
              res.json(order)
