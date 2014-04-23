Backbone = require 'backbone'
Products = require './../../shared/collections/products.coffee'
NoItemsView = require './utils/noItems.coffee'
Config = require '../../shared/config.coffee'
PublishModal = require './publish.coffee'

class RowView extends Backbone.Marionette.ItemView
  tagName: "tr"
  template: "products/item"
  initialize: ->
    @$el.data('id', @model.id)

module.exports = class ProductsView extends Backbone.Marionette.CompositeView
  template: 'products/index'
  className: 'panel'
  events:
    'click .delete': 'onRemoveClick'
    'click .create-campaign': 'onCreateCampaign'
    'click .add, .edit, tr': 'onEditClick'

  itemView: RowView

  itemViewContainer: ".list"

  initialize: (options = {}) ->
    @app = options.app
    @collection = options.collection or new Products()

    @collection.on 'sync', =>
      @emptyView = NoItemsView
      @render() unless @collection.length

    @collection.fetch()

  onEditClick: (e) =>
    e.preventDefault()
    e.stopPropagation()
    id = $(e.currentTarget).data('id')
    if id
      @app.router.navigate "/client/product/#{id}", {trigger: true}
    else
      @app.router.navigate "/client/product/create", {trigger: true}

  onRemoveClick: (e) =>
    e.preventDefault()
    e.stopPropagation()
    model = @collection.get $(e.currentTarget).data('id')
    model?.destroy()

  onModelSave: (model) ->
    @collection.add(model)

  onCreateCampaign: (e) =>
    e.preventDefault()
    e.stopPropagation()
    model = @collection.get $(e.currentTarget).data('id')
    modal = new PublishModal({product: model})
    @app.modal.show modal

