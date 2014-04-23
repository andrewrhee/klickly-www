_ = require 'underscore'

module.exports = class BaseController
  model: ''
  sortBy: 'name'
  deleteMethod: 'remove'
  tryToParseJSON: (json) ->
    try
      return JSON.parse json
    catch e
      return null
  restrict: (method, req, res, params) -> #no-opt
  index: (req, res, next) =>
    return next() unless req.xhr # forward on if its for html
    Model = req.models[@model]
    params = req.param('where') or {}
    if _.isString(params)
      params = @tryToParseJSON(params) or {}
    if @restrict('index', req, res, params) isnt false
      Model
        .find(params)
        .sort(@sortBy)
        .exec (err, docs) ->
          res.json docs

  at: (req, res, next) =>
    return next() unless req.xhr # forward on if its for html
    Model = req.models[@model]
    params =  {_id: req.params.id}
    res.json(401, {error: 'Unauthorized'}) if @restrict('at', req, res, params) is false
    Model.findOne params, (err, doc) ->
      res.json doc

  create: (req, res) =>
    Model = req.models[@model]
    data = req.body
    if @restrict('create', req, res, data) isnt false
      model = new Model(data)
      model.save (err) =>
        return res.json(400, err) if err
        res.json model.toJSON()

  update: (req, res) =>
    Model = req.models[@model]
    params =  {_id: req.params.id}
    res.json(401, {error: 'Unauthorized'}) if @restrict('update', req, res, params) is false
    Model.findOne params, (err, doc) ->
      return res.json(400, {error: err}) if err
      doc.set req.body
      doc.save (err) ->
        return res.json(400, {error: err}) if err
        res.json doc.toJSON()


  delete: (req, res) =>
    Model = req.models[@model]
    params =  {_id: req.params.id}
    if @restrict('delete', req, res, params) isnt false
      if @deleteMethod is 'hidden'
        Model.findOne params, (err, doc) ->
          return res.json(400, {error: err}) if err
          doc.set('removed', not (doc.status or false))
          doc.save (err) ->
            return res.json(400, {error: err}) if err
            res.send 200
      else
        Model.findOneAndRemove params, (err) ->
          if err
            res.json 400, error: err
          else
            res.send 200