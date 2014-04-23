require '../shared/index.coffee'

require '../../public/js/jquery.ui.widget'
require '../../public/js/jquery.iframe-transport'
require '../../public/js/jquery.fileupload'
Backbone = require 'backbone'

{JST} = require '../../public/js/templates.backend'
Backbone.Marionette.Renderer.render = (template, data) ->
  unless JST[template] then throw "Template '#{template}' not found!"
  return JST[template](data)

# Add session to all templates
Session = require './models/session.coffee'
_.extend Backbone.Marionette.View.prototype,
  session: Session
  templateHelpers: ->
    data = {}
    data.session = Session.toJSON()
    return data

# Init App
$ ->
  app = require './app.coffee'
  app.start()