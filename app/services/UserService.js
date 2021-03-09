const repositories = require("../repositories/UserRepository");
var BaseResponse = require("../models/base/BaseResponse");

/**
 * Lấy tất cả bản ghi trong bảng User
 * Cre: pqhuy 08/03/2021
 */
exports.GetAll = async function(req, res) {
    try {
        // gọi hàm lấy dữ liệu
        var users = await repositories.GetAll();
        if(users && users.length >= 0) {
            var response = new BaseResponse(true, "Lấy tất cả về thành công.", 200, users);
            res.send(response);
        }
        else {
            res.send(new BaseResponse(false, "Không có bản ghi nào được tìm thấy", 401, null));
        }
    }
    catch(err) {
        res.send(new BaseResponse(false, "Có lỗi xảy ra " + err, 500, null));
    }
}

/**
 * Hàm lấy 1 bản ghi theo id
 * Cre: pqhuy 08/03/2021
 */
exports.GetById = async function(req, res) {
    try {
        // gọi hàm lấy dữ liệu
        var users = await repositories.GetById(req.params.id);
        if(users) {
            var response = new BaseResponse(true, "Lấy theo id về thành công.", 200, users);
            res.send(response);
        }
        else {
            res.send(new BaseResponse(false, "Không có bản ghi nào được tìm thấy", 401, null));
        }
    }
    catch(err) {
        res.send(new BaseResponse(false, "Có lỗi xảy ra " + err, 500, null));
    }
}

/**
 * lấy các user theo groupUserId
 * Cre: pqhuy 09/03/2021
 */
exports.GetByGroupUserId = async function(req, res) {
    var users = await repositories.GetByGroupUserId(req.params.groupUserId);
    if(users) {
        var response = new BaseResponse(true, "Lấy theo proc về thành công.", 200, users);
        res.send(response);
    }
    else {
        res.send(new BaseResponse(false, "Không có bản ghi nào được tìm thấy", 401, null));
    }
}