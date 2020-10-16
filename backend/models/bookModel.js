const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  id: { type: Number, required: false},
  title: { type: String, required: true},
  author: { type: String, required: true},
  cost: { type: Number, required: true},
  sales: { type: Number, required: true},
});

module.exports = mongoose.model('Book',bookSchema);
