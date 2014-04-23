module.exports = class SubController
  model: ''
  collection: ''
  populate: []
  restrict: (req, res, data) -> #no-opt

  create: (req, res) =>
    Model = req.models[@model]
    params = {}
    params["_id"] = req.params.model
    @restrict req, res, params
    Model.findOne params, (err, doc) =>
      doc[@collection].push(req.body)
      doc.save (err) ->
        return res.json(400, err) if err
        res.json doc[@collection].pop()

  update: (req, res) =>
    Model = req.models[@model]
    params = {}
    params["#{@collection}._id"] = req.params.id
    @restrict req, res, params
    Model.findOne params, (err, doc) =>
      return res.json(400, {error: err}) if err
      subdoc = doc[@collection].id req.params.id
      subdoc.set req.body
      doc.save (err) =>
        return res.json(400, {error: err}) if err
        if @populate.length
          ###
          for item in @populate
            subdoc.populate item
          ###
          subdoc.populate '_commodity', (err, updatedDoc) ->
            res.json updatedDoc
        else
          res.json subdoc

  delete: (req, res) =>
    Model = req.models[@model]
    params = {}
    params["#{@collection}._id"] = req.params.id
    @restrict req, res, params
    Model.findOne params, (err, doc) =>
      return res.json(400, {error: err}) if err
      doc[@collection].id(req.params.id).remove()
      doc.save (err) ->
        return res.json(400, {error: err}) if err
        res.send 200
