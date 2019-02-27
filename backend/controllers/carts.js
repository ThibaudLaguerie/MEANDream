const Cart = require('../models/cart');

exports.addProductToCart = (req, res, next) => {
  const cart = new Cart({
    buyerId: req.body.buyerId,
    productId: req.body.productId
  });
  cart.save().then(createdCart => {
    res.status(201).json({
      message: 'Cart created successfully',
      cart: {
        ...createdCart
      }
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Création du panier échouée'
    });
  });
}

exports.getCarts = (req, res, next) => {
  Cart.find()
    .then(cart => {
      if(cart) {
        res.status(200).json(cart);
      } else {
        res.status(404).json({message: 'Cart not found'});
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Données introuvables'
      });
    });
}
