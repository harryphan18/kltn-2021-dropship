import UserService from "../services/UserService";
const url = "/api/v1/users";

module.exports = function(app) {
    /**
     * Lấy tất cả bản ghi trong bảng User
     * Cre: pqhuy 08/03/2021
     * /api/v1/user
     */
    app.route(url + "")
        .get(UserService.GetAll);

    /**
     * Lấy 1 bản ghi theo id
     * Cre: pqhuy 08/03/2021
     * /api/v1/user/1
     */
    app.route(url + "/:id")
        .get(UserService.GetById);
    
    /**
     * lấy các user theo groupUserId
     * Cre: pqhuy 09/03/2021
     */
    app.route(url + "/groupUserId/:groupUserId")
        .get(UserService.GetByGroupUserId);

    /**
     * Thêm mới bản ghi vào bảng user
     * Cre: pqhuy 11/03/2021
     */
    app.route(url + "")
        .post(UserService.CreateUser);

    app.route(url + "/testId/:testId")
        .get(UserService.UpdateUser);
}