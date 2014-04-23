BaseController = require './baseController.coffee'
mongoose = require 'mongoose'
fs = require 'fs'

module.exports = class ProductController extends BaseController
  model: 'product'
  restrict: (method, req, res, params) ->
    return false unless req.session.client
    unless req.session.client.isAdmin
      params.client = req.session.client._id

  create: (req, res) =>
    if @restrict('create', req, res, req.body) isnt false
      req.body.client = req.session.client._id
      return super(req, res)


  productDetail: (req, res) =>
    Product = req.models[@model]
    Product.findOne {'campaigns._id': req.params.id}, (err, product) ->
      unless product
        res.status(404)
        return res.render 'product/404'
      res.render 'product/detail', {product: product, campaignId: req.params.id}

  campaignCreate: (req, res) =>
    Product = req.models[@model]
    params =  {_id: req.params.id}
    res.json(401, {error: 'Unauthorized'}) if @restrict('update', req, res, params) is false
    Product.findOne params, (err, product) ->
      return res.json(400, {error: err}) if err
      product.addCampaign req.body, (err, campaign) ->
        return res.json(400, {error: err}) if err
        req.models.client.findById req.session.client._id, (err, client) ->
          client.broadcaseMessage campaign, product, (err) ->
            return res.json(400, {error: err}) if err
            res.json(campaign)

  campaignGet: (req, res) =>
    Product = req.models[@model]
    Product.findOne {'campaigns._id': req.params.id}, (err, product) ->
      unless product
        return res.json(400, {error: 'Product not found'})
      json = product.toJSON()
      delete json.campaigns
      json.campaign = product.campaigns.id(req.params.id)
      json.image = product.getImage()
      res.json(json)

  image: (req, res) =>

    mongoose.gfs.files.find({ filename: req.params.filename }).toArray (err, files) ->
      return req.send(404, 'Image not found') if err or not files.length
      readstream = mongoose.gfs.createReadStream
        _id: files[0]._id
      res.set 'Content-Type', files[0].content_type
      readstream.pipe res

  imageUpload: (req, res) =>
    return res.json({error: 'File not found'},400) unless req.files.image
    Product = req.models[@model]
    params =  {_id: req.params.id}
    res.json(401, {error: 'Unauthorized'}) if @restrict('update', req, res, params) is false

    Product.findOne params, (err, doc) ->
      return res.json(400, {error: err}) if err
      fileExt = req.files.image.name.split('.')
      fileExt = fileExt[fileExt.length - 1]
      filename = "#{req.params.id}.#{fileExt}"

      # First remove old one if there
      mongoose.gfs.remove {filename: filename}, (err) ->

        writestream = mongoose.gfs.createWriteStream
          filename: filename
          content_type: req.files.image.type
          mode: 'w'
        
        fs.createReadStream(req.files.image.path).pipe writestream

        writestream.on 'close', -> res.json({filename: filename})

        doc.set 'image', filename
        doc.save()
