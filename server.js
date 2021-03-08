var express = require("express");
var app = express();

// gọi global sequelize
sequel = require("./dbconfig/db.config");

// gọi global models
initModels = require("./app/models/init-models");
models = initModels(sequel);

// import controller
require("./app/controllers/index")(app);

// Create a Server
var server = app.listen(8081, function () {
	var port = server.address().port;
	console.log("\nApp listening at http://localhost:%s", port);
    console.log("...\n");
});