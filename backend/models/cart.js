const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  buyerId: {type: mongoose.Schema.Types.ObjectId, ref:'Buyer', required: true},
  productId: {type: mongoose.Schema.Types.ObjectId, ref:'ProductCart', required: true}
});

module.exports = mongoose.model('Cart', cartSchema);
