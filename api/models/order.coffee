module.exports = (Schema) ->

  schema = new Schema
    user:
      type: Schema.Types.ObjectId
      ref: 'user'
      required: true
    product:
      type: Schema.Types.ObjectId
      ref: 'product'
      required: true
    client:
      type: Schema.Types.ObjectId
      ref: 'client'
      required: true
    merchantId: String
    status:
      type: String
      enum: ['pending', 'failed', 'purchased', 'paid']
      default: 'pending'
    transaction:
      id: String
      error: String
    amount:
      type: Number
      required: true
    serviceFeeAmount:
      type: Number
      default: 0
    address:
      name:
        type: String
        required: true 
      street1:
        type: String
        required: true
      street2: String
      city:
        type: String
        required: true
      state:
        type: String
        required: true
      postalCode:
        type: String
        required: true
      country:
        type: String
        default: 'USA'

  return schema