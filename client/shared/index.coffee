window._ = _ = require 'underscore'
window.$ = window.jQuery = $ = require '../../public/js/jquery'
window.Backbone = Backbone = require 'backbone'
require 'backbone-associations'
require 'backbone-validation'
Backbone.Wreqr = require 'backbone.wreqr'
require 'backbone.babysitter'
Marionette = require 'backbone.marionette'
require '../../public/js/bootstrap'

Backbone.$ = $
Marionette.$ = $

_.extend(Backbone.Model.prototype, {idAttribute: '_id'})

_.extend(Backbone.Model.prototype, Backbone.Validation.mixin)

_.extend Backbone.Validation.callbacks,
  valid: (view, attr, selector) ->
    control = view.$('[' + selector + '=' + attr.replace(/\./g,"\\.") + ']')
    group = control.parents(".form-group")
    group.removeClass("has-error")
 
    if control.data("error-style") == "tooltip"
      # CAUTION: calling tooltip("hide") on an uninitialized tooltip
      # causes bootstraps tooltips to crash somehow...
      control.tooltip "hide" if control.data("tooltip")
    else if control.data("error-style") == "inline"
      group.find(".help-inline.error-message").remove()
    else
      group.find(".help-block.error-message").remove()
 
  invalid: (view, attr, error, selector) ->
    control = view.$('[' + selector + '=' + attr.replace(/\./g,"\\.") + ']')
    group = control.parents(".form-group")
    group.addClass("has-error")
 
    if control.data("error-style") == "tooltip"
      position = control.data("tooltip-position") || "right"
      control.tooltip
        placement: position
        trigger: "manual"
        title: error
      control.tooltip "show"
    else if control.data("error-style") == "inline"
      if group.find(".help-inline").length == 0
        group.find(".controls").append("<span class=\"help-inline error-message\"></span>")
      target = group.find(".help-inline")
      target.text(error)
    else
      if group.find(".help-block").length == 0
        group.find(".controls").append("<p class=\"help-block error-message\"></p>")
      target = group.find(".help-block")
      target.text(error)

deepen = (dotnotation) ->
  obj = {}
  for k, value of dotnotation
    parts = k.split('.')
    t = obj
    while parts.length
      part = parts.shift()
      if parts.length
        t = t[part] = t[part] or {}
      else
        t[part] = value

  return obj

$.fn.serializeObject = ->
  o = {}
  a = this.serializeArray()
  $.each a, ->
    if o[this.name] isnt undefined
      unless o[this.name].push
        o[this.name] = [o[this.name]]
      o[this.name].push(this.value or '')
    else
      o[this.name] = this.value or ''
  return deepen(o)

# Load template
window.Handlebars = require 'handlebars'
for name, fn of require('./handlebarsHelpers.coffee')
  window.Handlebars.registerHelper(name, fn)
