
import RoleService from "../services/RoleService";
const url = "/api/v1/roles";

module.exports = function(app) {
    /**
     * Lấy tất cả bản ghi trong bảng Role
     * Cre: pqhuy 08/03/2021
     * /api/v1/role
     */
    app.get(url, RoleService.GetAll);

    /**
     * Lấy 1 bản ghi theo id
     * Cre: pqhuy 08/03/2021
     * /api/v1/role/1
     */
    app.get(url + "/:id", RoleService.GetById);
}