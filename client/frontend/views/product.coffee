Backbone = require 'backbone'
LoginModal = require './loginModal.coffee'

module.exports = class ProductView extends Backbone.Marionette.ItemView

  template: 'product/details'

  events:
    'click .buy a.btn-primary': 'onBuy'

  templateHelpers: ->
    return {isCheckout: @isCheckout}

  initialize: (options = {}) ->
    @app = options.app
    @session = options.session
    @isCheckout = options.page is 'checkout'

  onBuy: (e) =>
    e.preventDefault()
    return @app.router.navigate("buy/#{@model.campaign._id}", {trigger: true}) if @session.id
    # Show login modal
    modal = new LoginModal({model: @model})
    @app.modal.show modal


