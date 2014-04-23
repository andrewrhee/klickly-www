Backbone = require 'backbone'
controller = require './controller.coffee'

module.exports = class Router extends Backbone.Marionette.AppRouter
  controller: controller
  appRoutes:
    'client/login'          : 'login'
    'client/list'           : 'clients'
    'client/create'         : 'client'
    'client/edit/:id'       : 'client'
    'client/products'       : 'products'
    'client/product/create' : 'product'
    'client/product/:id'    : 'product'
    'client/orders'         : 'orders'
    'client/order/:id'      : 'order'
