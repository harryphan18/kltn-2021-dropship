var Role = sequelizeModels.role;

export default {
    /**
     * Lấy tất cả bản ghi trong bảng User
     * Cre: pqhuy 08/03/2021
     */
    async GetAll() {
        var roles = await Role.findAll();
        return roles;
    },

    /**
     * Hàm lấy 1 bản ghi theo id
     * Cre: pqhuy 08/03/2021
     */
    async GetById(id) {
        var role = await Role.findOne({
            where: { 'RoleId' : id }
        });
        return role;
    }
}
