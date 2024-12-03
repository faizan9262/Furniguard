const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  country: String,
});

const SelectedProductSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price:Number,
});

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: AddressSchema,
  selectedProducts: [SelectedProductSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

module.exports = mongoose.model('Client', ClientSchema);
