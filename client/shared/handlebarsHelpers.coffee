_ = require 'underscore'
formatFactory = require 'format-number'
locals = require '../../config/locals.json'
moment = require 'moment'

module.exports = 
  compare: (lvalue, operator, rvalue, options) ->

    if arguments.length < 3
      throw new Error("Handlerbars Helper 'compare' needs 2 parameters")

    if _.isObject rvalue
      options = rvalue
      rvalue = operator
      operator = 'is'
    
    operators =
      'is':   (l,r) -> l is r
      'isnt':   (l,r) -> l isnt r
      '<':    (l,r) -> l < r
      '>':    (l,r) -> l > r
      '<=':   (l,r) -> l <= r
      '>=':   (l,r) -> l >= r
      'typeof': (l,r) -> typeof l is r
 
    unless operators[operator]
      throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator)
 
    result = operators[operator](lvalue,rvalue)
 
    if result
      return options.fn @
    else
      return options.inverse @

  ifAnd: (args...) ->
    options = args.pop()
    passed = true
    for arg in args
      passed = passed and arg
      break unless passed
    
    if passed
      return options.fn @
    else
      return options.inverse @

  ifOr: (args...) ->
    options = args.pop()
    passed = false
    for arg in args
      passed = passed or arg
      break if passed
    
    if passed
      return options.fn @
    else
      return options.inverse @

  objValue: (obj, key, objKey, options) ->
    ret = obj?[key]
    ret = ret?[objKey] if objKey
    return ret or ''
  keyValue: (items, options) ->
    out = ""
    out += options.fn(key: key, value: item) for key, item of items
    return out

  formatWeight: (weight, options) ->
    units = locals.measurements[options.hash.units]
    if units
      format = formatFactory({padRight: units.precision, suffix: " #{units.abbr}"})
    else
      format = formatFactory({padRight: 2})
    return format weight

  formateDate: (context, options) ->
    format = options.hash.format ? "MMM Do, YYYY"
    if format is 'from now'
      return moment(new Date(context)).fromNow()
    return moment(new Date(context)).format(format)
