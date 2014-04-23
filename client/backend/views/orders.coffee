Backbone = require 'backbone'
Orders = require './../../shared/collections/orders.coffee'
NoItemsView = require './utils/noItems.coffee'
Config = require '../../shared/config.coffee'

class RowView extends Backbone.Marionette.ItemView
  tagName: "tr"
  template: "orders/item"

module.exports = class OrdersView extends Backbone.Marionette.CompositeView
  template: 'orders/index'
  className: 'panel'
  events:
    'click .add, .edit': 'onEditClick'

  itemView: RowView

  itemViewContainer: ".list"

  initialize: (options = {}) ->
    @app = options.app
    @collection = options.collection or new Orders()

    @collection.on 'sync', =>
      @emptyView = NoItemsView
      @render() unless @collection.length

    @collection.fetch()

  onEditClick: (e) =>
    e.preventDefault()
    id = $(e.currentTarget).data('id')
    @app.router.navigate "/client/order/#{id}", {trigger: true}

  onModelSave: (model) ->
    @collection.add(model)
