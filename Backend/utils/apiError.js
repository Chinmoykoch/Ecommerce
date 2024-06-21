// class apiError extends Error{
//     constructor(
//         message = "Something went wrong",
//         statuscode,
//         // errors = [],
//         // statck = ""
//     ){
//         super(message)
//         this.statuscode = statuscode
//         this.message = message
//         // this.errors = errors
//         // this.success = false
//         Error.captureStackTrace(this, this.constructor);
//         // if (statck) {
//         //     this.stack = statck
//         // } else {
//         //     Error.captureStackTrace(this, this.constructor)
//         // }
//     }
// }

// export { apiError }

export class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}


