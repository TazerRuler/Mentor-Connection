
//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var session = require('express-session');



//set up express app
var PORT = process.env.PORT || 8080;
var app = express();
var router = express.Router();

//set the public folder to static
app.use(express.static(process.cwd() + "/public"));

//set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//require the models
var db = require("./models");

//routes

require("./src/routes/mentor-api-routes.js")(app);

// require("./associations")(db);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
// required for passport
app.use(session({
    secret: 'mentor connection', // session secret
    resave: true,
    saveUninitialized: true
}));
