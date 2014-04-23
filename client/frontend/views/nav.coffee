Session = require '../models/session.coffee'

module.exports = class Nav extends Backbone.Marionette.ItemView
  
  template: 'nav'

  events:
    'click a[data-path]': 'goto'

  initialize: (options = {}) ->
    @app = options.app
    @model = Session
    Session.on 'change', => @render() #rerender if logged in

  goto: (e) =>
    e.preventDefault()
    @app.router.navigate $(e.currentTarget).data('path'), {trigger: true}