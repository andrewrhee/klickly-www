sys = require 'util'
oauth = require 'oauth'

module.exports = class TwitterController

  consumer: (who = 'user') ->
    return new oauth.OAuth 'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'rUSbP6MSfsysoeuX4MonQ',
      '0eHidbEHpBJVnqjWPLINtcnmFW6V9XurR8iFb8k',
      '1.0A',
      "http://localhost:3000/#{who}/twitter/callback",
      'HMAC-SHA1'

  clientConnect: (req, res) =>
    if req.session.client
      @consumer('client').getOAuthRequestToken (error, oauthToken, oauthTokenSecret, results) ->
        if error
          res.send error, 500
        else 
          req.session.oauthRequestToken = oauthToken
          req.session.oauthRequestTokenSecret = oauthTokenSecret
          res.redirect "https://api.twitter.com/oauth/authorize?oauth_token=#{req.session.oauthRequestToken}"
    else
      res.send('Not Authorized',401)

  clientCallback: (req, res) =>
    if req.session.client
      @consumer('client').getOAuthAccessToken req.session.oauthRequestToken, req.session.oauthRequestTokenSecret, req.query.oauth_verifier, (error, oauthAccessToken, oauthAccessTokenSecret, results) =>
        if error
          res.send(error, 500)
        else
          req.session.oauthAccessToken = oauthAccessToken
          req.session.oauthAccessTokenSecret = oauthAccessTokenSecret
          @consumer().get "https://api.twitter.com/1.1/account/verify_credentials.json", req.session.oauthAccessToken, req.session.oauthAccessTokenSecret, (error, data, response) ->
            if error
              res.send(error, 500)
            else
              data = JSON.parse(data)
              req.models.client.findOne {_id: req.session.client._id}, (err, doc) ->
                doc.set 'social.twitter.token', oauthAccessToken
                doc.set 'social.twitter.secret', oauthAccessTokenSecret
                doc.set 'social.twitter.twitterId', data.id
                doc.set 'social.twitter.screenName', data.screen_name
                doc.set 'social.twitter.image', data.profile_image_url_https
                doc.save (err) ->
                  res.redirect 302, "/client/edit/#{doc._id}"
    else
      res.send('Not Authorized',401)

  userConnect: (req, res) =>
    res.cookie('campaign', req.params.campaignId) if req.params.campaignId
    @consumer().getOAuthRequestToken (error, oauthToken, oauthTokenSecret, results) ->
      if error
        res.send error, 500
      else 
        req.session.oauthRequestToken = oauthToken
        req.session.oauthRequestTokenSecret = oauthTokenSecret
        res.redirect "https://api.twitter.com/oauth/authorize?oauth_token=#{req.session.oauthRequestToken}"

  userCallback: (req, res) =>
    @consumer().getOAuthAccessToken req.session.oauthRequestToken, req.session.oauthRequestTokenSecret, req.query.oauth_verifier, (error, oauthAccessToken, oauthAccessTokenSecret, results) =>
      if error
        res.send(error, 500)
      else
        req.session.oauthAccessToken = oauthAccessToken
        req.session.oauthAccessTokenSecret = oauthAccessTokenSecret
        @consumer().get "https://api.twitter.com/1.1/account/verify_credentials.json", req.session.oauthAccessToken, req.session.oauthAccessTokenSecret, (error, data, response) ->
          if error
            res.send(error, 500)
          else
            data = JSON.parse(data)
            userData =
              name: data.name
              token: oauthAccessToken
              secret: oauthAccessTokenSecret
              id: data.id
              username: data.screen_name
              image: data.profile_image_url_https
            req.models.user.login userData, 'twitter', (err, user) ->
              if user
                req.session.user = user
                res.redirect 302, "/purchase/#{req.cookies.campaign}"
              else
                res.send error, 500

