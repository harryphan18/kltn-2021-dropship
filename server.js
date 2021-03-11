var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from './config/swagger/swaggerJsdoc';

// gọi global sequelize
global.sequelize = require("./config/dbconfig/db.config");

// gọi global models
var initModels = require("./app/models/sequelize-models/init-models");
global.sequelizeModels = initModels(sequelize);

// import controller
global.routes = require("./app/controllers/index")(app);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));

// Create a Server
var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log("\nApp listening at http://localhost:%s", port);
    console.log("...\n");
});