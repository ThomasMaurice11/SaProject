const express = require('express')

// controller functions
const { loginUser, signupUser, completeReg } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)
//complete reg
router.post('/', completeReg)

module.exports = router