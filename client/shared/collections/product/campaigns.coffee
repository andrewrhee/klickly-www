Backbone = require 'backbone'
Campaign = require '../../../shared/models/product/campaign.coffee'

module.exports = class Campaigns extends Backbone.Collection
  model: Campaign
  url: => "/product/#{@parents[0].id}/campaign"

  comparator: (model) ->
    return - (new Date(model.get('expiresAt'))).getTime()