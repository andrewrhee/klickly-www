BaseController = require './baseController.coffee'

module.exports = class UserController extends BaseController
  login: (req, res) =>
    res.cookie('campaign', req.params.campaignId) if req.params.campaignId
    res.render 'user/login'

  session: (req, res) ->
    if req.session.user
      req.models.user.findById req.session.user._id, (err, doc) ->
        req.session.user = doc
        res.json(req.session.user)
    else
      res.json({})