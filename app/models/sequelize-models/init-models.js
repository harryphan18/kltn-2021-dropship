var DataTypes = require("sequelize").DataTypes;
var _groupuser = require("./groupuser");
var _role = require("./role");
var _user = require("./user");

function initModels(sequelize) {
  var groupuser = _groupuser(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  user.belongsTo(groupuser, { as: "GroupUser", foreignKey: "GroupUserID"});
  groupuser.hasMany(user, { as: "users", foreignKey: "GroupUserID"});
  user.belongsTo(role, { as: "Role", foreignKey: "RoleID"});
  role.hasMany(user, { as: "users", foreignKey: "RoleID"});

  return {
    groupuser,
    role,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
