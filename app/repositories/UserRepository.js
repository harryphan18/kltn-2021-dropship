var User = models.user;

/**
 * Lấy tất cả bản ghi trong bảng User
 * Cre: pqhuy 08/03/2021
 */
exports.GetAll = function() {
    var users = User.findAll();
    return users;
}

/**
 * Hàm lấy 1 bản ghi theo id
 * Cre: pqhuy 08/03/2021
 */
exports.GetById = async function(id) {
    var user = await User.findOne({
        where: { 'UserId' : id }
    });
    return user;
}
