class ApiError extends Error {
    constructor(
        statusCode,
        message = "An error occurred",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode;
        this.errors = errors;
        this.date = null;
        this.message = message;
        this.success = false;

        if(stack){
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
module.exports = ApiError;