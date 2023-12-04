const express = require('express')

const router = express.Router()
const Cart=require('../models/cartModel')
const {
    getProductsInCart: getProductsInCart,
  getProductId: getProductId,
  addProducToCart: addProducToCart,
//   deleteProduct: deleteProduct,
//   updateProduct: updateProduct
} = require('../controllers/cartController')





// GET all products in cart
router.get('/',getProductsInCart)

// GET a product id with specific user
router.get('/',getProductId)

// add product to cart
router.post('/', addProducToCart)

// DELETE a workout
// router.delete('/:id',deleteProduct)

// UPDATE a workout
// router.patch('/:id',updateProduct)

module.exports = router