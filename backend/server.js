const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config() // allows us to have a dotenv file with our variables in it 
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

// Connect to the database
connectDB()

const app = express()

// need to add middleware to use body objects with certain CRUD requests
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// allow server js to use the routes 
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// use the error handler middleware, overwrite default express error handling
// NOTE: this needs to be under the routes
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))