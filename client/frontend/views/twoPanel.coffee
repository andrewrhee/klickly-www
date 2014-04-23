Backbone = require 'backbone'
LoginModal = require './loginModal.coffee'

module.exports = class TwoPanelView extends Backbone.Marionette.Layout

  template: 'twoPanel'

  regions:
    left: '#left-region'
    right: '#right-region'
