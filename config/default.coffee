module.exports =
  db: "mongodb://program:recycle@ds041208.mongolab.com:41208/klickly"
  secret: 'beer-pong'
  locals: require('./locals')
  url: 'http://localhost:3000'
  payment:
    env: 'Sandbox'
    merchantAccountId: 'qcgcxnchnns729bs'
    id: 'hzkp332cx85phdnw'
    key: '8cdtr3b8j3wq56kc'
    secret: '4093258d7d3d2cd98d4ae6e776a2ffba'
  social:
    twitter:
      oauth:
        key: 'rUSbP6MSfsysoeuX4MonQ'
        secret: '0eHidbEHpBJVnqjWPLINtcnmFW6V9XurR8iFb8k'
    facebook:
      oauth:
        key: '302377826570015'
        secret: '68affc9f613bbead2c27d79df0cc0a58'
        baseUrl: 'https://graph.facebook.com'