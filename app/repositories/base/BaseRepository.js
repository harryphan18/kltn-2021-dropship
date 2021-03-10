
export default {
    /**
     * Thực hiện query bằng stored procedure và mảng các tham số
     * Cre: pqhuy 10/03/2021
     * @param {String} procedureName : tên của procedure
     * @param {Array} paramValues : giá trị của các param
     */
    async CallProcWithParams(procedureName, params) {
        let paramValues = await this.SetParameterValues(procedureName, params);
        return await this.CallProcedure(procedureName, paramValues);
    },

    /**
     * Thực hiện query bằng stored procedure và entity
     * Cre: pqhuy 11/03/2021
     */
    async CallProcWithEntity(procedureName, object) {
        let paramValues = await this.MapParameterValueAndEntityProperty(procedureName, object);
        return await this.CallProcedure(procedureName, paramValues);
    },

    /**
     * Hàm map dữ liệu của object với property của procedure
     * Cre: pqhuy 11/03/2021
     * @param {String} procedureName : tên của procedure
     * @param {Object} object : object truyền vào
     */
    async MapParameterValueAndEntityProperty(procedureName, object) {
        var parameterFromStore = await this.GetParameterFromProcedure(procedureName);

        if(parameterFromStore && parameterFromStore.length > 0) 
        {
            let parameterValues = [];

            parameterFromStore.forEach(paramStore => {
                let value = this.getPropertyValue(object, paramStore);
                parameterValues.push(value);
            });

            if(parameterValues.length > 0) 
            {
                return parameterValues;
            }
        }
        else {
            return null;
        }
    },

    /**
     * Lấy dữ liệu trong object theo propertyName (không phân biệt hoa thường)
     * Cre: pqhuy 11/03/2021
     */
    getPropertyValue(object, paramName) {
        let property = Object.getOwnPropertyNames(object);
        if(property && property.length > 0) 
        {
            let value = null;

            property.forEach(ele => {
                if(ele.toLowerCase() == paramName.toLowerCase()) {
                    value = object[ele];
                }
            })
            return value;
        }
        else 
        {
            return null;
        }
    },

    /**
     * Thực hiện query bằng cách sử dụng stored procedure
     * Cre: pqhuy 09/03/2021
     * @param {*} procedureName : tên của procedure
     * @param {*} paramValues : giá trị của các param (xếp đúng theo thứ tự trong procedure)
     */
    async CallProcedure(procedureName, parameterValues) {
        if(parameterValues) {
            var res = await sequelize.query(
                'CALL ' + procedureName + '(:params)', 
                { 
                    replacements: {
                        params : parameterValues
                    } 
                }
            )
            return res;
        }
    },

    /**
     * Hàm set giá trị của các parameter tương ứng với procedure
     * Cre: pqhuy 10/03/2021
     */
     async SetParameterValues(procedureName, parameters) {
        var parameterFromStore = await this.GetParameterFromProcedure(procedureName);
        if(parameterFromStore.length > 0) 
        {
            var parameterValues = [];
            for (let index = 0; index < parameterFromStore.length; index++) 
            {
                if(index < parameters.length) 
                {
                    parameterValues.push(parameters[index]);
                }
                else 
                {
                    parameterValues.push(null);
                }
            }
            return parameterValues;
        }
        return null;
    },

    /**
     * Thực hiện lấy về các parameter của procedure
     * Cre: pqhuy 09/03/2021
     */
    async GetParameterFromProcedure(procedureName) {
        var res = await sequelize.query(
            'CALL Proc_GetParameterNameFromProc(:procedureName)', 
            { 
                replacements: {
                    procedureName : procedureName
                } 
            }
        )
        if(res) {
            return res.map(ele => ele.PARAMETER_NAME);
        }
        return null;
    },
}


