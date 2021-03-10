import RoleRepository from "../repositories/RoleRepository";
import BaseResponse from "../models/base/BaseResponse";

export default {
    /**
     * Lấy tất cả bản ghi trong bảng Role
     * Cre: pqhuy 08/03/2021
     */
    async GetAll(req, res) {
        try {
            // gọi hàm lấy dữ liệu
            var roles = await RoleRepository.GetAll();
            if(roles && roles.length >= 0) {
                var response = new BaseResponse(true, "Lấy về thành công.", 200, roles);
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
    async GetById (req, res) {
        try {
            // gọi hàm lấy dữ liệu
            var roles = await RoleRepository.GetById(parseInt(req.params.id));
            if(roles) {
                var response = new BaseResponse(true, "Lấy về thành công.", 200, roles);
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
}
