const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.get('/', (request, response,next) => {
    User
      .find({})
      .then(users => {
        response.json(users)
      })
      .catch(error=>next(error))
  })

loginRouter.post('/', async (request, response) => {
    const {username, password} = request.body
    const user = await User.findOne({username})
    const passwordCorrect = user===null ? false 
    : await bcrypt.compare(password, user.passwordHash)
    if (!(user && passwordCorrect)) {
        response.status(401).json({error: 'invalid username or password'})
    }
    else {
        const userToken = {username: user.username, id: user._id,}
    
        const token = jwt.sign(userToken, process.env.SECRET)
        response.status(200).send({token, username: user.username, name: user.name})
    }
})

module.exports = loginRouter