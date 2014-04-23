Backbone = require 'backbone'

class Session extends Backbone.Model

  isLoggedIn: => if @id then true else false

  urlRoot: =>
    return '/user/session'

module.exports = new Session()