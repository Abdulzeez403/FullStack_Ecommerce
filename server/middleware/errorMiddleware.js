const errorHandler = (err, req, res, next) => {
    console.error(err);
  
    // Check if the response has already been sent
    if (res.headersSent) {
      return next(err);
    }
  
    // Set the default status code and error message
    let statusCode = 500;
    let errorMessage = 'Internal Server Error';
  
    // Check the error type and set appropriate status code and error message
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      statusCode = 400;
      errorMessage = 'Bad Request';
    }
  
    // Send the error response
    res.status(statusCode).json({ success: false, error: errorMessage });
  };
  
  module.exports = errorHandler;
  