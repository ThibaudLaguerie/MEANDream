const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const cartController = require('../controllers/carts');

router.post("",
  checkAuth,
  cartController.addProductToCart
);

module.exports = router;

router.get("", cartController.getCarts);
