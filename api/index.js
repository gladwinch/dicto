const express = require('express')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')

//connect db
connectDB()

// app configuration
let app = express()

//app config
app.use(express.json())

//Passport Initialization
require("./services/passport.service").initialize()

// Dev logging middleware
// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
// }

// Routers
app.use(require("./config/path").include(express.Router()));

//error handler
app.use(errorHandler)

// Export the server middleware
module.exports = {
    path: '/api',
    handler: app
}