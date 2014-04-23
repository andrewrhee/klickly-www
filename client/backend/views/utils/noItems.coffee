Backbone = require 'backbone'
module.exports = class NoItemsView extends Backbone.Marionette.ItemView
  tagName: "tr"
  className: "no-items"
  template: "utils/noItems"