const Cart = require('../models/cartModel')
const mongoose = require('mongoose')


// get all workouts
const getProductsInCart = async (req, res) => {
  const products = await Cart.find({}).sort({createdAt: -1})

  res.status(200).json(products)
}

const getProductId = async (req, res) => {
  const { user_id } = req.params;

  // Assuming user_id is not an ObjectId, you can use it directly in the query
  const product = await Cart.findOne({ user_id });

  if (!product) {
    return res.status(404).json({ error: 'No such workout' });
  }

  res.status(200).json(product);
};



// create a new workout
const addProducToCart = async (req, res) => {
  const {user_id,product_id,name,price,description,brand,image} = req.body

  // add to the database
  try {
    const product = await Cart.create({user_id,product_id,name,price,description,brand,image})
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
// const deleteProduct = async (req, res) => {
//     const { id } = req.params
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({error: 'No such workout'})
//     }
  
//     const product = await Workout.findOneAndDelete({_id: id})
  
//     if(!product) {
//       return res.status(400).json({error: 'No such workout'})
//     }
  
//     res.status(200).json(product)
//   }
  
  // update a workout
//   const updateProduct = async (req, res) => {
//     const { id } = req.params
  
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({error: 'No such workout'})
//     }
  
//     const product = await Product.findOneAndUpdate({_id: id}, {
//       ...req.body
//     })
  
//     if (!product) {
//       return res.status(400).json({error: 'No such workout'})
//     }
  
//     res.status(200).json(product)
//   }

module.exports = {
    getProductsInCart: getProductsInCart,
  getProductId: getProductId,
  addProducToCart: addProducToCart,
//   deleteProduct: deleteProduct,
//   updateProduct: updateProduct
}