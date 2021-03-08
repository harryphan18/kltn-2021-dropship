var Role = models.role;

/**
 * Lấy tất cả bản ghi trong bảng User
 * Cre: pqhuy 08/03/2021
 */
exports.GetAll = function() {
    var roles = Role.findAll();
    return roles;
}

/**
 * Hàm lấy 1 bản ghi theo id
 * Cre: pqhuy 08/03/2021
 */
exports.GetById = async function(id) {
    var role = await Role.findOne({
        where: { 'RoleId' : id }
    });
    return role;
}