const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    RoleID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "PK"
    },
    RoleName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Tên vai trò"
    },
    Description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Mô tả vai trò"
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Ngày tạo bản ghi"
    },
    CreatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Tạo bởi"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Ngày sửa"
    },
    ModifiedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sửa bởi"
    }
  }, {
    sequelize,
    tableName: 'role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
    ]
  });
};
