const Product = require('../models/productModel')
const mongoose = require('mongoose')


// get all workouts
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({createdAt: -1})

  res.status(200).json(products)
}

// get a single workout
const getProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const product = await Product.findById(id)

  if (!product) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(product)
}

// create a new workout
const createProduct = async (req, res) => {
  const {name, price, description,brand,image} = req.body

  // add to the database
  try {
    const product = await Product.create({ name, price, description,brand,image })
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteProduct = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const product = await Workout.findOneAndDelete({_id: id})
  
    if(!product) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(product)
  }
  
  // update a workout
  const updateProduct = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const product = await Product.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!product) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(product)
  }

module.exports = {
  getProducts: getProducts,
  getProduct: getProduct,
  createProduct: createProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct
}