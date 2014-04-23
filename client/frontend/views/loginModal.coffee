Backbone = require 'backbone'

module.exports = class LoginModalView extends Backbone.Marionette.ItemView

  template: 'user/loginModal'

  initialize: (options = {}) ->
    @app = options.app
    @session = options.session
    


