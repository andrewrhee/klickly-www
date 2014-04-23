Backbone = require 'backbone'
Clients = require './../../shared/collections/clients.coffee'
NoItemsView = require './utils/noItems.coffee'
Config = require '../../shared/config.coffee'


class RowView extends Backbone.Marionette.ItemView
  tagName: "tr"
  template: "clients/item"

module.exports = class ClientsView extends Backbone.Marionette.CompositeView
  template: 'clients/index'
  className: 'panel'
  events:
    'click .add, .edit': 'onEditClick'
    'click .delete': 'onRemoveClick'

  itemView: RowView

  itemViewContainer: ".list"

  initialize: (options = {}) ->
    @app = options.app
    @collection = options.collection or new Clients()

    @collection.on 'sync', =>
      @emptyView = NoItemsView
      @render() unless @collection.length

    @collection.fetch
      data:
        where:
          removed: false

  onEditClick: (e) =>
    e.preventDefault()
    id = $(e.currentTarget).data('id')
    if id
      @app.router.navigate "/client/edit/#{id}", {trigger: true}
    else
      @app.router.navigate "/client/create", {trigger: true}

  onRemoveClick: (e) =>
    e.preventDefault()
    model = @collection.get $(e.currentTarget).data('id')
    model?.destroy()

  onModelSave: (model) ->
    @collection.add(model)
