Backbone = require 'backbone'
Order = require '../models/order.coffee'

module.exports = class Orders extends Backbone.Collection
  model: Order
  url: '/orders'