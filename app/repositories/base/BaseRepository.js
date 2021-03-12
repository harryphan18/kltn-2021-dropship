import DatabaseConnector from "./DatabaseConnector";

export default {
    /**
     * Hàm GET tất cả sử dụng sequelize
     * @param {*} T : sequelize model
     * @returns 
     * Cre: pqhuy 13/03/2021
     */
    async GetAll(T) {
        return T.findAll();
    },

    /**
     * Hàm GET theo ID sử dụng sequelize
     * @param {*} T : sequelize model
     * @param {*} id 
     * @returns 
     * Cre: pqhuy 13/03/2021
     */
    async GetById(T, id) {
        return T.findByPk(id);
    },

    /**
     * Thực hiện query bằng stored procedure và mảng các tham số
     * Cre: pqhuy 10/03/2021
     * @param {String} procedureName : tên của procedure
     * @param {Array} paramValues : giá trị của các param
     */
    async CallProcWithParams(procedureName, params) {
        let paramValues = await DatabaseConnector.SetParameterValues(procedureName, params);
        return await DatabaseConnector.CallProcedure(procedureName, paramValues);
    },

    /**
     * Thực hiện query bằng stored procedure và entity
     * Cre: pqhuy 11/03/2021
     */
    async CallProcWithEntity(procedureName, object) {
        let paramValues = await DatabaseConnector.MapParameterValueAndEntityProperty(procedureName, object);
        return await DatabaseConnector.CallProcedure(procedureName, paramValues);
    },

}

