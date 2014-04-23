express = require 'express'
http = require 'http'
router = require "./router"
database = require "./database"
grunt = require "./grunt"
MongoStore = require 'connect-session-mongo'
Config = require 'config'
Domain = require 'domain'

app = express()

# all environments
app.set 'port', process.env.PORT or 3000
app.set 'views', "#{process.cwd()}/views"
app.set 'view engine', 'jade'
app.use express.favicon()
app.use express.logger('dev')
app.use express.bodyParser()
app.use express.methodOverride()
app.use express.cookieParser Config.secret ? 'beer'

#app.use express.session {}

app.use express.cookieSession()
#app.use express.session
#  store: new MongoStore url: Config.db

app.use express.static("#{process.cwd()}/public")

# development only
if 'development' is app.get('env')
  app.use express.errorHandler()

database app, "#{process.cwd()}/api/models"

# Use set since I can pass these into the template easily
app.set(key, value) for key, value of Config.locals

app.use (req, res, next)->
  domain = Domain.create()
  domain.on 'error', next
  domain.run next

# Load routes located in config/routes.json
app.use app.router
routePath = "#{process.cwd()}/config/routes"
controllerPath = "#{process.cwd()}/api/controllers"
#middlewarePath = "#{process.cwd()}/api/middleware"
middlewarePath = false
router(app, routePath, controllerPath, middlewarePath)

grunt()

http.createServer(app).listen app.get('port'), ->
  console.log 'Server running on http://localhost:' + app.get('port')
