Backbone = require 'backbone'
Client = require '../models/client.coffee'

module.exports = class Clients extends Backbone.Collection
  model: Client
  url: '/clients'
