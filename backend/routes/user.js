const express = require('express')
const router = express.Router()

const user=require('../models/userModel')

// controller functions
const { loginUser, signupUser,getProfileData } = require('../controllers/userController')



// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)
//complete reg
router.get('/:userId', getProfileData)


module.exports = router