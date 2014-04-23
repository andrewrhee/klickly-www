{OAuth2} = require "oauth"

module.exports = class FacebookController

  consumer: ->
    return new OAuth2('302377826570015',  '68affc9f613bbead2c27d79df0cc0a58',  "https://graph.facebook.com")

  clientConnect: (req, res) =>
    if req.session.client
      oAuth = @consumer()
      url = oAuth.getAuthorizeUrl
        redirect_uri : 'http://localhost:3000/client/facebook/callback'
        scope: 'publish_stream'
        display: 'page'
      res.redirect url
    else
      res.send('Not Authorized',401)

  clientCallback: (req, res) =>
    if req.session.client
      oAuth = @consumer()
      oAuth.getOAuthAccessToken req.query.code , {redirect_uri: 'http://localhost:3000/client/facebook/callback'}, ( error, access_token, refresh_token ) ->
        return res.send(error,400) if error
        oAuth.getProtectedResource "https://graph.facebook.com/me", access_token, (error, data, response) ->
          return res.send(error,400) if error
          data = JSON.parse(data)
          req.models.client.findOne {_id: req.session.client._id}, (err, doc) ->
            doc.set 'social.facebook.token', access_token
            doc.set 'social.facebook.username', data.username
            doc.set 'social.facebook.facebookId', data.id
            doc.set 'social.facebook.image', "https://graph.facebook.com/#{data.username}/picture?type=square"
            doc.save (err) ->
              res.redirect 302, "/client/edit/#{doc._id}"
    else
      res.send('Not Authorized',401)

  userConnect: (req, res) =>
    res.cookie('campaign', req.params.campaignId) if req.params.campaignId
    oAuth = @consumer()
    url = oAuth.getAuthorizeUrl
      redirect_uri : 'http://localhost:3000/user/facebook/callback'
      scope: 'publish_stream'
      display: 'page'
    res.redirect url

  userCallback: (req, res) =>
    oAuth = @consumer()
    oAuth.getOAuthAccessToken req.query.code , {redirect_uri: 'http://localhost:3000/user/facebook/callback'}, ( error, access_token, refresh_token ) ->
      return res.send(error,400) if error
      oAuth.getProtectedResource "https://graph.facebook.com/me", access_token, (error, data, response) ->
        if error
          res.send(error, 500)
        else
          data = JSON.parse(data)
          userData =
            email: data.email
            name: data.name
            token: access_token
            id: data.id
            username: data.username
            image: "https://graph.facebook.com/#{data.username}/picture?type=square"
          req.models.user.login userData, 'twitter', (err, user) ->
            if user
              req.session.user = user
              res.redirect 302, "/purchase/#{req.cookies.campaign}"
            else
              res.send error, 500
