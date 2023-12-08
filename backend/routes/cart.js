const express = require('express')

const router = express.Router()
const Cart=require('../models/cartModel')
const {
    getProductsInCart: getProductsInCart,
  // getProduct: getProduct,
  addProducToCart: addProducToCart,
//   deleteProduct: deleteProduct,
//   updateProduct: updateProduct
} = require('../controllers/cartController')


// const requireAuth = require('../middleware/requireAuth')



// // require auth for all workout routes
// router.use(requireAuth)





// GET all products in cart
router.get('/:userId',getProductsInCart)

// GET a product id with specific user
// router.get('/',getProductId)

// add product to cart
router.post('/', addProducToCart)

// DELETE a workout
// router.delete('/:id',deleteProduct)

// UPDATE a workout
// router.patch('/:id',updateProduct)

module.exports = router