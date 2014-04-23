Backbone = require 'backbone'
Merchant = require './client/merchant.coffee'

module.exports = class Client extends Backbone.AssociatedModel

  relations: [
    {
      type: Backbone.One
      key: 'merchant'
      relatedModel:Merchant
    }
  ]

  validation:
    name:
      required: true
      msg: 'Please enter a your first name'
    username:
      required: true
      msg: 'Please enter a username'
    email: 
      required: true
      pattern: 'email'
    password: (value) ->
      return unless @isNew()
      return if value and value.length >= 6
      return 'Password is required and must be 6 or more characters'

  urlRoot: '/client'

  removeTwitter: (cb) ->
    @save {'social.twitter': {screenName:"", token:"", secret: "", twitterId: "", image: ""}},
      patch: true
      success: cb
      error: cb

  removeFacebook: (cb) ->
    @save {'social.facebook': {username:"", token:"", facebookId: "", image: ""}},
      patch: true
      success: cb
      error: cb
