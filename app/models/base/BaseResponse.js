class BaseResponse {
    constructor(success, message, code, data) {
        this.Sucess = success;
        this.Message = message;
        this.Code = code;
        this.Data = data;
    };
}

export default BaseResponse;