app = require './app.coffee'
Session = require './models/session.coffee'
Product = require '../shared/models/product.coffee'
CheckoutModel = require './models/checkout.coffee'

# Helper for simple views
show = (View, options = {}, cb) =>
  options.session = Session
  options.app = app

  display = =>
    view = new View(options)
    app.main.show view
    if cb
      cb(view)

  if Session.isNew() and not options.noAuth
    Session.fetch
      success: display
      error: display
  else
    display()

exports.product = (id) ->
  model = new Product({campaign: id})
  model.fetch()
  model.once 'sync', =>
    show require('./views/product.coffee'), {model: model}

exports.checkout = (id) ->
  product = new Product({campaign: id})
  product.fetch()
  product.once 'sync', =>
    show require('./views/twoPanel.coffee'), {}, (view) =>
      checkoutModel = new CheckoutModel({product: product.get('campaign')._id})
      Checkout = require('./views/checkout.coffee')
      checkout = new Checkout({product: product, model: checkoutModel})
      view.right.show checkout

      ProductDetails = require('./views/product.coffee')
      productDetails = new ProductDetails({model: product, page: 'checkout'})
      view.left.show productDetails
