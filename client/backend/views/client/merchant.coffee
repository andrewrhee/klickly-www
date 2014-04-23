Backbone = require 'backbone'
Config = require '../../../shared/config.coffee'
Merchant = require '../../../shared/models/client/merchant.coffee'

module.exports = class MerchantModalView extends Backbone.Marionette.ItemView

  template: "client/merchant"

  events:
    'submit form': 'onSubmit'

  initialize: (options = {}) ->
    @client = options.client
    @model = new Merchant()
    @model.clientId = @client.id
    Backbone.Validation.bind @

  serializeData: ->
    data = super()
    data.client = @client.toJSON()
    return data

  onSubmit: (e) =>
    e.preventDefault()
    data = $(e.currentTarget).serializeObject()
    @$('.alert-danger').remove()

    if @model.set data
      @$('.modal-footer button').attr "disabled", "disabled"
      @client.set('merchant', @model)
      @model.save {},
        success: (model, response, options) =>
          @$('.modal-body').html "<div class=\"alert alert-success fade in\">
            <strong>Success!</strong> Merchant account has been submitted for approval.
            </div>"
          @$('.modal-footer').remove()
          doHide = => @$('.modal').modal('hide')
          setTimeout doHide, 2500
        error: (model, xhr, options) =>
          @$('.modal-footer button').removeAttr "disabled"
          @$('.modal-body').prepend Config.errors.ajax
    else
      @$('.modal-footer button').removeAttr "disabled"