var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// gọi global sequelize
sequelize = require("./dbconfig/db.config");

// gọi global models
initModels = require("./app/models/sequelize-models/init-models");
sequelizeModels = initModels(sequelize);

// import controller
require("./app/controllers/index")(app);

// Create a Server
var server = app.listen(8081, function () {
	var port = server.address().port;
	console.log("\nApp listening at http://localhost:%s", port);
    console.log("...\n");
});