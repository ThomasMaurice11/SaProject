require('dotenv').config()

const express = require('express')
const productRoutes = require('./routes/products')
const mongoose = require('mongoose');
const path = require('path');

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// Middleware to set MIME type for CSS files
app.use('/assets/ProductsDetails', (req, res, next) => {
  if (path.extname(req.path) === '.css') {
    res.type('text/css');
  }
  next();
});
// app.use('assets/ProductsDetails', express.static(path.join(__dirname,'assets/ProductsDetails')));

// app.use(express.static(path.join(__dirname, '../public')));
app.use('/assets/ProductsDetails', express.static(path.join(__dirname, 'assets/ProductsDetails')));

// routes
app.use('/api/products', productRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URl)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
