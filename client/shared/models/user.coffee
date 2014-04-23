Backbone = require 'backbone'

module.exports = class User extends Backbone.Model

  validation:
    organization:
      required: true
    'name.first':
      required: true
      msg: 'Please enter a your first name'
    'name.last':
      required: true
      msg: 'Please enter a your last name'
    email: 
      required: true
      pattern: 'email'
    password:
      required: true
      minLength: 6

  urlRoot: =>
    if @type is 'login'
      return '/login'
    return '/users'

  initialize: (options = {}) ->
    @type = options.type if options.type