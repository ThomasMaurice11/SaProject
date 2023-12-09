const express = require('express');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const userRoutes = require('./routes/user');
const savedRoutes = require('./routes/saved');
// const profileRoutes = require('./routes/profile');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Middleware to set MIME type for CSS files
app.use('/assets/ProductsDetails', (req, res, next) => {
  if (path.extname(req.path) === '.css') {
    res.type('text/css');
  }
  next();
});

// Serve static files from the 'frontend/public' directory
app.use('/assets/ProductsDetails', express.static(path.join(__dirname, '../frontend/public')));
app.use('/api/cart', cartRoutes);
app.use('/api/user', userRoutes);
app.use('/api/saved', savedRoutes);
// app.use('/api/profile', profileRoutes);

app.use('/api/products', productRoutes);


mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => {
      console.log('Listening for requests on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
