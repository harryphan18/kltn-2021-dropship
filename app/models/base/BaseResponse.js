var BaseResponse = function(success, message, code, data) {
    this.Sucess = success;
    this.Message = message;
    this.Code = code;
    this.Data = data;
}

BaseResponse.prototype = Object.create(BaseResponse);
BaseResponse.prototype.constructor = BaseResponse;

BaseResponse.prototype.Sucess = false;
BaseResponse.prototype.Message = null;
BaseResponse.prototype.Code = null;
BaseResponse.prototype.Data = null;

module.exports = BaseResponse;