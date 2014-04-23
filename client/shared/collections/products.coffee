Backbone = require 'backbone'
Product = require '../models/product.coffee'

module.exports = class Products extends Backbone.Collection
  model: Product
  url: '/products'
