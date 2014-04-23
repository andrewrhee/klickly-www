Backbone = require 'backbone'
Config = require '../../shared/config.coffee'

module.exports = class Login extends Backbone.Marionette.ItemView
  
  template: 'login'
  
  className: 'login'

  events:
    'submit form': 'onSubmit'

  initialize: (options = {}) ->
    @model = @session
    @app = options.app
    Backbone.Validation.bind @

  onSubmit: (e) =>
    e.preventDefault()
    data = $(e.currentTarget).serializeObject()
    @$('form > .alert').remove()

    if @model.set data
      @model.save {},
        success: (model, response, options) =>
          if window.location.pathname is '/client/login'
            @app.router.navigate "/client/products", {trigger: true}
          else
            # Hack for now since backbone doesnt like history being the same
            window.location.reload true
        error: (model, xhr, options) =>
          @$('form').prepend "<div class=\"alert alert-danger fade in\">
            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>
            <strong>Oh snap!</strong> Invalid username or password.
            </div>"