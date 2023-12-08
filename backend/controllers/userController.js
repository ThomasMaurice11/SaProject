const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
  }

// login a user
const loginUser = async (req, res) => {
    const {email,password}=req.body

   try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
      const user = await User.signup(email, password)
      const token = createToken(user._id)
  
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

const completeReg = async (req, res) => {
  const {fname, sname, mobile,address} = req.body

  // add to the database
  try {
    const product = await User.create({ fname, sname, mobile,address})
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { signupUser, loginUser,completeReg }