module.exports = (Schema) ->

  Address = new Schema
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

  schema = new Schema
    name:
      type: String
      required: true
    email: String
    payment:
      token: String
      last4: String
      cardType: String
      expiration: String
    oauth:
      twitter:
        token: String
        secret: String
        username: String
        id: Number
        image: String
      facebook:
        token: String
        username: String
        id: Number
        image: String
    addresses: [Address]

  schema.virtual('firstName').get ->
    if @name
      parts = @name.split ' '
      return parts[0]
    return ''

  schema.virtual('lastName').get ->
    if @name
      parts = @name.split ' '
      return parts[parts.length - 1]
    return ''

  schema.statics.login = (data, type, cb) ->
    User = this
    params = {}
    params["oauth.#{type}.id"] = data.id
    User.findOne params, (err, user) ->
      return cb(err) if err
      return cb(null, user) if user
      user = new User()
      user.name = data.name
      user.email = data.email if data.email
      user.set "oauth.#{type}",
        token: data.token
        secret: data.secret if type is 'twitter'
        username: data.username
        image: data.image
        id: data.id
      user.save (err) ->
        return cb(err) if err
        cb(null, user)
  return schema