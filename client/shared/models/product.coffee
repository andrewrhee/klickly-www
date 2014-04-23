Backbone = require 'backbone'
Campaign = require './product/campaign.coffee'
Campaigns = require '../collections/product/campaigns.coffee'

module.exports = class Product extends Backbone.AssociatedModel

  relations: [
    {
      type: Backbone.Many
      key: 'campaigns'
      relatedModel:Campaign
      collectionType: Campaigns
    }
  ]

  validation:
    name:
      required: true

  urlRoot: =>
    if @get 'campaign'
      return "/product/campaign/#{@get('campaign')}"
    return '/product'