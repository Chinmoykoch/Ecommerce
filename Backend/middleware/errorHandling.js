// need to fix the statuscode undefined
const  errorHandling = (err, req, res, next)=> {
    
    const statusCode = err.status || 500
    const message = err.message || 'Internal Server Error';

    return res.status(statusCode).json({
        success: false,
        message
    });
}

export default errorHandling();

  