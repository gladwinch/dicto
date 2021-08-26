const asyncHandler = require('./async')
const ErrorResponse = require('../utils/errorResponse')

module.exports = asyncHandler( async(req, res, next) => {
    if(!req.isAuthenticated() || !req.user) {
        return next(
            new ErrorResponse("Unauthorize", 401)
        )
    }
    
    next()
})