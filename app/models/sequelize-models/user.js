const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    UserID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true,
      comment: "PK"
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "FK id vai trò",
      references: {
        model: 'role',
        key: 'RoleID'
      }
    },
    GroupUserID: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      comment: "FK group ID",
      references: {
        model: 'groupuser',
        key: 'GroupUserID'
      }
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Tên"
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Họ"
    },
    FullName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Họ và tên"
    },
    UserName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Tên đăng nhập"
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Mật khẩu"
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
    ModifiedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sửa bởi"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Ngày sửa"
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
      {
        name: "FK_user_role_RoleID",
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
      {
        name: "FK_user_groupuser_GroupUserID",
        using: "BTREE",
        fields: [
          { name: "GroupUserID" },
        ]
      },
    ]
  });
};
