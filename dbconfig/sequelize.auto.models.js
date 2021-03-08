const SequelizeAuto = require('sequelize-auto');
var sequelize = require("./db.config");

// tự động render model các bảng
const sequelizeAuto = new SequelizeAuto(sequelize, null, null, {
    // thư mục chứa model mới render
    directory: './app/models',

    // tên các bảng cần render lại, chú ý cần cập nhật bảng nào thì cập nhật, không cập nhật tất cả 1 lúc
    // tables: ['user', 'groupuser']
});
sequelizeAuto.run();