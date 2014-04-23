Backbone = require 'backbone'
LoginModal = require './loginModal.coffee'
Config = require '../../shared/config.coffee'

module.exports = class CheckoutView extends Backbone.Marionette.ItemView

  template: 'order/checkout'

  events:
    'click .change-cc': 'onChangeCC'
    'submit form': 'onSubmit'

  initialize: (options = {}) ->
    @app = options.app
    @session = options.session

  onSubmit: (e) =>
    e.preventDefault()
    data = $(e.currentTarget).serializeObject()
    @$('.alert-danger').remove()

    if @model.set data
      @model.save {},
        success: (model, response, options) =>
          @render()
        error: (model, xhr, options) =>
          @$('.modal-body').prepend Config.errors.ajax
    else
       @$('.modal-body').prepend Config.errors.validation

  onChangeCC: (e) =>
    e.preventDefault()
    @$('.saved-card').slideUp()
    @$('.card-entry').slideDown()


