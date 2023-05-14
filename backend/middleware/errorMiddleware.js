const errorHandler = (err, req, res, next) => { // overrides the express error handling
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    }) // if we are in production, just show the error message.  If we are developing then show line numbers for debugging (the error stack)
}



module.exports = {
    errorHandler
}