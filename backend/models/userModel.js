const mongoose = require('mongoose')
const validator = require('validator')



const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})





// static login method
userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    if (user.password !== password) {
        throw Error('Incorrect password');
      }
  
    return user
  }


userSchema.statics.signup = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
      }
      if (!validator.isEmail(email)) {
        throw Error('Email not valid')
      }

    const exists = await this.findOne({ email })
  
    if (exists) {
      throw Error('Email already in use')
    }
 
  
    const user = await this.create({ email, password })
    
  
    return user
  }

module.exports = mongoose.model('User', userSchema)