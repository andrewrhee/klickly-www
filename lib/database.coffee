fs = require 'fs'
Config = require 'config'
mongoose = require 'mongoose'
{timestamps} = require 'mongoose-plugins-timestamp'
Grid = require 'gridfs-stream'

module.exports = (app, modelPath) ->
  Grid.mongo = mongoose.mongo
  mongoose.connect Config.db
  connection = mongoose.connections[0]
  connection.once 'open', ->
    mongoose.gfs = Grid(connection.db)
  models = {}
  for file in fs.readdirSync modelPath
    name = file.replace /\..*/g, ''
    schema = require("#{modelPath}/#{file}")(mongoose.Schema)
    schema.plugin timestamps
    mongoose.model name, schema
    models[name] = mongoose.model name

  # Attache middleware
  app.use (req, res, next) ->
    req.models = models
    next()