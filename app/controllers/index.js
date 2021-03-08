module.exports = function(app) {
    app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
		next();
	});

	// import controller
    require("./UserController")(app);
    require("./RoleController")(app);
}