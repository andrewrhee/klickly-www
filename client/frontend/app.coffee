Backbone = require 'backbone'
Nav = require './views/nav.coffee'
ModalRegion = require '../shared/views/modal.coffee'

app = new Backbone.Marionette.Application()

app.addRegions
  main: "#main"
  nav: "#header"
  modal: ModalRegion

app.addInitializer (options) ->
  Router = require('./router.coffee')
  app.router = new Router()
  nav = new Nav({app: app})
  app.nav.show nav
  Backbone.history.start pushState: true

module.exports = app