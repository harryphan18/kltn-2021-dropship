
const services = require("../services/UserService");
const url = "/api/v1/user";

module.exports = function(app) {
    /**
     * Lấy tất cả bản ghi trong bảng User
     * Cre: pqhuy 08/03/2021
     * /api/v1/user
     */
    app.get(url + "", services.GetAll);

    /**
     * Lấy 1 bản ghi theo id
     * Cre: pqhuy 08/03/2021
     * /api/v1/user/1
     */
    app.get(url + "/:id", services.GetById);
}