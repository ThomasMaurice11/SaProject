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
    const {email, password,fname,mobile,address} = req.body

    try {
      const user = await User.signup(email, password,fname,mobile,address)
      const token = createToken(user._id)
  
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}
const getProfileData = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ _id: userId }).sort({ createdAt: -1 });

    if (!user) {
      return res.status(404).json({ error: 'No data found for the specified user_id' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
};

module.exports = {
  loginUser: loginUser,
// getProduct: getProduct,
signupUser: signupUser,
getProfileData:getProfileData
//   deleteProduct: deleteProduct,
//   updateProduct: updateProduct
}