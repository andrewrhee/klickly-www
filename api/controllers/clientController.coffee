BaseController = require './baseController.coffee'
BrainTree = require '../modules/braintree'

module.exports = class ClientController extends BaseController
  model: 'client'
  deleteMethod: 'hidden'

  restrict: (method, req, res, params) ->
    return false unless req.session.client # Must be logged in
    # Only admins can create clients
    return false if method is 'create' and not req.session.client.isAdmin
    unless req.session.client.isAdmin
      params._id = req.session.client._id

  logout: (req, res) ->
    req.session = null
    res.redirect 302, '/client/login'

  session: (req, res) ->
    if req.session.client
      req.models.client.findById req.session.client._id, (err, doc) ->
        req.session.client = doc
        res.json(req.session.client)
    else res.json(401, {error: 'Unauthorized'})

  createMerchant: (req, res) ->
    if req.session.client
      req.models.client.findById req.session.client._id, (err, client) ->
        BrainTree.createMerchant req.body, client, (err) ->
          return res.json(500, {error: err}) if err
          res.json client
    else res.json(401, {error: 'Unauthorized'})

  login: (req, res) ->
    Client = req.models.client
    Client.canLogin req.body.username, req.body.password, (err, client, org) ->
      return res.json(400, {error: 'Invalid username or password'}) if err or not client
      req.session.client = client
      res.json(client)

  dashboard: (req, res) ->
    res.render 'client/login'