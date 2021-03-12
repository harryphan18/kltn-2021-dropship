import BaseRepository from "./base/BaseRepository";
var Role = sequelizeModels.role;

export default {
    /**
     * Lấy tất cả bản ghi trong bảng User
     * Cre: pqhuy 08/03/2021
     */
    async GetAll() {
        var roles = await BaseRepository.GetAll(Role);
        return roles;
    },

    /**
     * Hàm lấy 1 bản ghi theo id
     * Cre: pqhuy 08/03/2021
     */
    async GetById(id) {
        var role = await BaseRepository.GetById(Role, id);
        return role;
    }
}
