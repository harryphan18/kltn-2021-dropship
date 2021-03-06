import BaseRepository from "./base/BaseRepository";
var User = sequelizeModels.user;

export default {
    /**
     * Lấy tất cả bản ghi trong bảng User
     * Cre: pqhuy 08/03/2021
     */
    async GetAll() {
        var users = await BaseRepository.GetAll(User);
        return users;
    },

    /**
     * Hàm lấy 1 bản ghi theo id
     * Cre: pqhuy 08/03/2021
     */
    async GetById(id) {
        var user = await BaseRepository.GetById(User, id);
        return user;
    },

    /**
     * lấy các user theo groupUserId
     * Cre: pqhuy 09/03/2021
     */
    async GetByGroupUserId(groupUserId) {
        var procedureName = "Proc_GetUserByGroupID";
        var user = await BaseRepository.CallProcWithParams(procedureName, [groupUserId]);
        return user;
    },

    /**
     * Thêm mới bản ghi vào bảng user sử dụng stored
     * Cre: pqhuy 11/03/2021
     */
    async CreateUser(newUser) {
        // var procedureName = "Proc_InsertUser";
        // var user = await BaseRepository.CallProcWithEntity(procedureName, newUser);
        var user = await BaseRepository.Insert(User, newUser);
        return user;
    },

    async UpdateUser(id) {
        var user = await BaseRepository.GetById(User, id);
        return user;
    },
}
