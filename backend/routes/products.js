const express = require('express')

const router = express.Router()
const Product=require('../models/productModel')
const {
  getProducts: getProducts, 
  getProduct: getProduct, 
  createProduct: createProduct, 
  deleteProduct: deleteProduct, 
  updateProduct: updateProduct
} = require('../controllers/productController')

// GET all workouts
router.get('/',getProducts)

// GET a single workout
router.get('/:id',getProduct)

// POST a new workout
router.post('/', createProduct)

// DELETE a workout
router.delete('/:id',deleteProduct)

// UPDATE a workout
router.patch('/:id',updateProduct)

module.exports = router