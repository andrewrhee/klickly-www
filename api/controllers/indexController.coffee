module.exports = class IndexController

  backend: (req, res) ->
    res.render 'index/backend'

  frontend: (req, res) ->
    res.render 'index/frontend'

  index: (req, res) ->
    res.render 'index/index'