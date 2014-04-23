app = require './app.coffee'
Session = require './models/session.coffee'

# Helper for simple views
show = (View, options = {}) =>
  if Session.isNew() and not options.noAuth
    Session.fetch
      success: ->
        options.app = app
        app.main.show new View(options)
      error: ->
        exports.login()
  else
    options.app = app
    app.main.show new View(options)

exports.login = ->
  show require('./views/login.coffee'), {noAuth: true}

exports.clients = ->
  show require('./views/clients.coffee')

exports.client = (id) ->
  show require('./views/client.coffee'), {id: id}

exports.products = ->
  show require('./views/products.coffee')

exports.product = (id) ->
  show require('./views/product.coffee'), {id: id}

exports.orders = ->
  show require('./views/orders.coffee')

exports.order = (id) ->
  show require('./views/order.coffee'), {id: id}
