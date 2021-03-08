const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupuser', {
    GroupUserID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true,
      comment: "PK"
    },
    GroupUserName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Tên đội nhóm"
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
    tableName: 'groupuser',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GroupUserID" },
        ]
      },
    ]
  });
};
