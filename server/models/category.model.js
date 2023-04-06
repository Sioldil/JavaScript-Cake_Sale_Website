const mongoose = require('mongoose');

const Category = mongoose.model(
  'Category',
  new mongoose.Schema(
    {
      name: String,
      status: String,
    },
    {
      collection: 'CategoryInfo',
    }
  )
);

module.exports = Category;
