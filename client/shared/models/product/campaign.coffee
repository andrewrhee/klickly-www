Backbone = require 'backbone'

module.exports = class Campaign extends Backbone.AssociatedModel

  validation:
    message:
      required: true