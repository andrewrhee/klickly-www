Backbone = require 'backbone'
Order = require '../../shared/models/order.coffee'
Config = require '../../shared/config.coffee'

module.exports = class OrderView extends Backbone.Marionette.ItemView

  template: 'order/index'

  itemViewContainer: ".list"

  initialize: (options = {}) ->
    @app = options.app
    
    @model = new Order({_id: options.id})
    @model.fetch()

    @model.once 'sync', => @render()