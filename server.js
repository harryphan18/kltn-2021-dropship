var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();

// gọi global sequelize
global.sequelize = require("./dbconfig/db.config");

// gọi global models
var initModels = require("./app/models/sequelize-models/init-models");
global.sequelizeModels = initModels(sequelize);

// import controller
require("./app/controllers/index")(app);

// Create a Server
var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log("\nApp listening at http://localhost:%s", port);
    console.log("...\n");
});