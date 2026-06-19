class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went error",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode,
        this.message = message,
        this.data = null,
        this.success = false,
        this.errors = errors
    }
}

export {ApiError}