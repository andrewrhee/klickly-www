Backbone = require 'backbone'
Product = require '../../shared/models/product.coffee'
Config = require '../../shared/config.coffee'
PublishModal = require './publish.coffee'

class RowView extends Backbone.Marionette.ItemView
  tagName: "tr"
  template: "product/campaignItem"

module.exports = class ProductView extends Backbone.Marionette.CompositeView

  template: 'product/index'

  events:
    'submit form': 'onSubmit'
    'click .publish': 'publish'

  itemView: RowView

  itemViewContainer: ".list"

  initialize: (options = {}) ->
    @app = options.app
    if options.id
      @model = new Product({_id: options.id})
      @model.fetch()
    else 
      @model = new Product()


    @model.once 'sync', =>
      @collection = @model.get('campaigns')
      @collection.on 'change', =>
        @collection.sort()
        @render()
      @render()

  onDomRefresh: ->
    @$('#fileupload').fileupload
      dataType: 'json',
      done: (e, data) -> console.log 'done'

  publish: (e) =>
    e.preventDefault()
    modal = new PublishModal({product: @model})
    @app.modal.show modal

  onSubmit: (e) =>
    e.preventDefault()
    data = $(e.currentTarget).serializeObject()
    @$('.alert-danger').remove()

    isNew = @model.isNew()
    if @model.set data
      @model.save {},
        success: (model, response, options) =>
          if isNew
            @app.router.navigate "/product/#{response._id}", {trigger: true}
          else
            alert('Saved')
        error: (model, xhr, options) =>
          @$('.modal-body').prepend Config.errors.ajax
    else
       @$('.modal-body').prepend Config.errors.validation