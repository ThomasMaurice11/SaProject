const Cart = require('../models/cartModel')
const mongoose = require('mongoose') ;




// get all workouts
const getProductsInCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const products = await Cart.find({ userId }).sort({ createdAt: -1 });

    if (products.length === 0) {
      return res.status(404).json({ error: 'No products found for the specified user_id' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
};


// get a single workout







// create a new workout
// create a new workout
const addProducToCart = async (req, res) => {
  const {userId,product_id,name,price,description,brand,image} = req.body

  // add to the database
  try {
    const product = await Cart.create({userId,product_id,name,price,description,brand,image})
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
  // getProduct: getProduct,
  addProducToCart: addProducToCart,
//   deleteProduct: deleteProduct,
//   updateProduct: updateProduct
}