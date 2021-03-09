
/**
 * Thực hiện query bằng cách sử dụng stored procedure
 * Cre: pqhuy 09/03/2021
 * @param {*} procedureName : tên của procedure
 * @param {*} paramValues : giá trị của các param (xếp đúng theo thứ tự trong procedure)
 */
exports.CallProcedure = async function(procedureName, parameterValues) {
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
}

/**
 * Hàm set giá trị của các parameter tương ứng với procedure
 * Cre: pqhuy 10/03/2021
 */
exports.SetParameterValues = async function(procedureName, parameters) {
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
}


/**
 * Thực hiện lấy về các parameter của procedure
 * Cre: pqhuy 09/03/2021
 */
exports.GetParameterFromProcedure = async function(procedureName) {
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
}