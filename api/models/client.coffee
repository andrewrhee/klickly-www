bcrypt = require 'bcrypt'
Config = require 'config'
oauth = require 'oauth'
request = require 'request'
async = require 'async'

twitterConnect = ->
  return new oauth.OAuth 'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    Config.social.twitter.oauth.key,
    Config.social.twitter.oauth.secret,
    '1.0A',
    "{#Config.url}/client/twitter/callback",
    'HMAC-SHA1'

module.exports = (Schema) ->
  client = new Schema
    name:
      type: String
      required: true
    username:
      type: String
      required: true
    password:
      type: String
    email:
      type: String
    phone:
      type: String
    address:
      street1: String
      street2: String
      city: String
      state: String
      country: String
      postalCode: String
    klicklyRate:
      type: Number
      default: 0.05
    payment:
      braintree:
        id:
          type: String
        status:
          type: String
          enum: ['pending', 'approved']
    isAdmin:
      type: Boolean
      default: false
    removed:
      type: Boolean
      default: false
    social:
      twitter:
        token: String
        secret: String
        screenName: String
        twitterId: Number
        image: String
      facebook:
        token: String
        username: String
        facebookId: Number
        image: String

  client.methods.broadcaseMessage = (campaign, product, cb) ->

    postToTwitter = (callback) =>
      twitterConnect().post "http://api.twitter.com/1.1/statuses/update.json",
        @social.twitter.token,
        @social.twitter.secret,
        {status: "#{campaign.message} #{Config.url}/#{campaign._id}"},
        callback

    postToFacebook = (callback) =>
      params = 
        message: campaign.message
        #link: "#{Config.url}/#{campaign._id}"
        name: product.name
        description: product.description
        picture: product.getImage()
        caption: "#{Config.url}/#{campaign._id}"
        access_token: @social.facebook.token
      request.post "#{Config.social.facebook.oauth.baseUrl}/me/feed", {form: params}, callback

    flow = {}
    flow.twitter = postToTwitter if campaign.channels.twitter
    flow.facebook = postToFacebook if campaign.channels.facebook
    async.parallel flow, cb

  client.options.toJSON = {} unless client.options.toObject
  client.options.toJSON.transform = (doc, ret, options) -> 
    delete ret.password
    return ret
  client.methods.comparePassword = (inputPassword, cb) ->
    bcrypt.compare inputPassword, this.password, (err, isMatch) ->
      cb(err, isMatch)

  client.pre 'save', (next) ->
    return next() unless this.isModified 'password'
    bcrypt.genSalt 10, (err, salt) =>
      return next(err) if err
      bcrypt.hash this.password, salt, (err, hash) =>
        this.password = hash
        next(err)

  client.statics.canLogin = (username, password, cb) ->
    this.findOne {'username': username}, (err, client) ->
      return cb(err) if err
      return cb('User not found') unless client
      client.comparePassword password, (err, isMatch) ->
        if err or isMatch is false
          return cb(err)
        cb(err, client)

  return client

