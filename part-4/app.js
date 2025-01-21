const config = require('./units/part-4/util/config')
const express = require('express')
const app = express()
const cors = require('cors') 
const middleware = require('./units/part-4/util/middleware')   
const blogRouter = require('./controller/blog') 
const userRouter = require('./controller/user')
const loginRouter = require('./controller/login')
const logger = require('./units/part-4/util/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.tokenExtractor) 
app.use(middleware.requestLogger)     

app.use(express.static('dist'))
app.use('/api/blogs', middleware.userExtractor, blogRouter)
app.use('/api/users',userRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
  