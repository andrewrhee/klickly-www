moment = require 'moment'
Config = require 'config'

module.exports = (Schema) ->

  Campaign = new Schema
    message:
      type: String
      required: true
    expiresAt:
      type: Date
      required: true
    channels:
      facebook:
        type: Boolean
        default: false
      twitter:
        type: Boolean
        default: false

  schema = new Schema
    name:
      type: String
      required: true
    description:
      type: String
      required: true
    sku:
      type: String
      required: true
    price:
      type: Number
      required: true
    qty:
      type: Number
      required: true
    client:
      type: Schema.Types.ObjectId
      ref: 'client'
      required: true
    image:
      data: Buffer
      contentType: String
    campaigns: [Campaign]

  schema.methods.getImage = ->
    return "/product/#{@_id}/images/#{@get('image', String)}?_=#{moment(@updatedAt).valueOf()}" if @image

  schema.methods.addCampaign = (data, cb) ->
    campaign = 
      message: data.message
      channels: data.channels or {}

    return cb("Please select one or more channels.") unless Object.keys(campaign.channels).length

    if data.expiresIn
      expiresIn = data.expiresIn.split(':')
      campaign.expiresAt = moment()
        .add('hours', parseInt(expiresIn[0],10))
        .add('minutes', parseInt(expiresIn[1],10))
        .toDate()
    @campaigns.push campaign
    @save (err) =>
      return cb(err) if err
      cb(null, @campaigns[@campaigns.length - 1])

  return schema