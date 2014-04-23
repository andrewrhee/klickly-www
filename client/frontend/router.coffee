Backbone = require 'backbone'
controller = require './controller.coffee'

module.exports = class Router extends Backbone.Marionette.AppRouter
  controller: controller
  appRoutes:
    'buy/:id'      : 'product'
    'purchase/:id' : 'checkout'
