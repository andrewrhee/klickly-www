Backbone = require 'backbone'
Config = require '../../shared/config.coffee'
Client = require '../../shared/models/client.coffee'
MerchantModal = require './client/merchant.coffee'

module.exports = class ClientView extends Backbone.Marionette.ItemView

  template: 'client'

  className: 'panel'

  events:
    'submit form': 'onSubmit'
    'click .remove-twitter': 'removeTwitter'
    'click .remove-facebook': 'removeFacebook'
    'click .payment-modal': 'showPaymentModal'

  initialize: (options = {}) ->
    @app = options.app
    isNew = false
    if options.id
      @model = new Client({_id: options.id})
      @model.on 'sync', =>
        unless isNew
          isNew = true
          @render()
        @$('input[name="password"]').val ''
      @model.fetch()
    else 
      @model = new Client()

    Backbone.Validation.bind @

  removeTwitter: (e) =>
    e.preventDefault()
    @model.removeTwitter => @render()

  removeFacebook: (e) =>
    e.preventDefault()
    @model.removeFacebook => @render()

  showPaymentModal: (e) =>
    e.preventDefault()
    modal = new MerchantModal({client: @model})
    @app.modal.show modal

  onSubmit: (e) =>
    e.preventDefault()
    data = $(e.currentTarget).serializeObject()
    if data.password is ""
      delete data['password']
    @$('form > .alert').remove()

    isNew = @model.isNew()
    @model.save data,
      patch: true
      success: (model, response, options) =>
        if isNew
          @app.router.navigate "/client/edit/#{response._id}", {trigger: false}
        else
          @$('form').prepend '<div class="alert alert-success fade in"><strong>Success!</strong> Settings have been updated.<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button></div>'
      error: (model, xhr, options) =>
        @$('form').prepend Config.errors.ajax