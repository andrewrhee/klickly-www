Backbone = require 'backbone'
Config = require '../../shared/config.coffee'

module.exports = class PublishModalView extends Backbone.Marionette.ItemView
  template: "publish/modal"
  events:
    'submit form': 'onSubmit'
  initialize: (options = {}) ->
    @product = options.product
    Campaign = @product.get('campaigns').model
    window.campaigns = @product.get('campaigns')
    @model = new Campaign()
    Backbone.Validation.bind @
  onSubmit: (e) =>
    e.preventDefault()
    data = $(e.currentTarget).serializeObject()
    @$('.alert-danger').remove()

    unless @$('.channels input:checked').length
      return @$('.modal-body').prepend "<div class=\"alert alert-danger fade in\">
        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>
        <strong>Oh snap!</strong> Must select at least one channel.
        </div>"

    if @model.set data
      @$('.modal-footer button').attr "disabled", "disabled"
      @product.get('campaigns').push(@model)
      @model.save {},
        success: (model, response, options) =>
          @$('.modal-body').html "<div class=\"alert alert-success fade in\">
            <strong>Success!</strong> Campaign is now live.
            </div>"
          @$('.modal-footer').remove()
          doHide = => @$('.modal').modal('hide')
          setTimeout doHide, 2500
        error: (model, xhr, options) =>
          @$('.modal-footer button').removeAttr "disabled"
          @$('.modal-body').prepend Config.errors.ajax