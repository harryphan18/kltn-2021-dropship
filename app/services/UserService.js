import UserRepository from "../repositories/UserRepository";
import BaseResponse from "../models/base/BaseResponse";

export default {
    /**
     * Lấy tất cả bản ghi trong bảng User
     * Cre: pqhuy 08/03/2021
     */
    async GetAll(req, res) {
        try {
            // gọi hàm lấy dữ liệu
            var users = await UserRepository.GetAll();
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
    },

    /**
     * Hàm lấy 1 bản ghi theo id
     * Cre: pqhuy 08/03/2021
     */
    async GetById(req, res) {
        try {
            // gọi hàm lấy dữ liệu
            var users = await UserRepository.GetById(req.params.id);
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
    },

    /**
     * lấy các user theo groupUserId
     * Cre: pqhuy 09/03/2021
     */
    async GetByGroupUserId(req, res) {
        var users = await UserRepository.GetByGroupUserId(req.params.groupUserId);
        if(users) {
            var response = new BaseResponse(true, "Lấy theo proc về thành công.", 200, users);
            res.send(response);
        }
        else {
            res.send(new BaseResponse(false, "Không có bản ghi nào được tìm thấy", 401, null));
        }
    },

    /**
     * Thêm mới bản ghi vào bảng user
     * Cre: pqhuy 11/03/2021
     */
    async CreateUser(req, res) {
        var users = await UserRepository.CreateUser(req.body);
        var response = new BaseResponse(true, "Thêm user thành công.", 200, users);
        res.send(response);
    },

    async UpdateUser(req, res) {
        var users = await UserRepository.UpdateUser(req.params.testId);
        var response = new BaseResponse(true, "Thêm user thành công.", 200, users);
        res.send(response);
    },
}
