const mongoose = require('mongoose');

const Product = mongoose.model(
  'Product',
  new mongoose.Schema(
    {
      name: String,
      price: String,
      image: String,
    },
    {
      collection: 'ProductInfo',
    }
  )
);

module.exports = Product;
