Backbone = require 'backbone'

module.exports = class Merchant extends Backbone.AssociatedModel

  validation:
    firstName:
      required: true
    lastName:
      required: true
    firstName:
      required: true
    dateOfBirth:
      required: true
    routingNumber:
      required: true
    accountNumber:
      required: true
    'address.streetAddress':
      required: true
    "address.locality":
      required: true
    "address.region":
      required: true
    "address.postalCode":
      required: true

  url: => "/client/#{@clientId}/merchant"