const express = require('express')

const router = express.Router()
const Saved=require('../models/savedModel')
const {
    getProductsInSaved: getProductsInSaved,
  // getProduct: getProduct,
  addProducToSaved: addProducToSaved,
//   deleteProduct: deleteProduct,
//   updateProduct: updateProduct
} = require('../controllers/savedController')


// const requireAuth = require('../middleware/requireAuth')



// // require auth for all workout routes
// router.use(requireAuth)





// GET all products in cart
router.get('/:userId',getProductsInSaved)

// GET a product id with specific user
// router.get('/',getProductId)

// add product to cart
router.post('/', addProducToSaved)

// DELETE a workout
// router.delete('/:id',deleteProduct)

// UPDATE a workout
// router.patch('/:id',updateProduct)

module.exports = router