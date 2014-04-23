Backbone = require 'backbone'

module.exports = class Checkout extends Backbone.Model

  urlRoot: =>
    return "/purchase/#{@get('product')}"