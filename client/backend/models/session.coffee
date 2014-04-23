Backbone = require 'backbone'

class Session extends Backbone.Model

  validation:
    username:
      required: true
      msg: 'Please enter a username'
    password:
      required: true
      msg: 'Please enter a password'

  isLoggedIn: => if @id then true else false

  urlRoot: =>
    return '/client/session'

module.exports = new Session()