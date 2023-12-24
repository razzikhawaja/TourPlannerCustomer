const express = require('express');
const router = express.Router();
const cartController = require('../Controller/CartController');

router.post('/add', cartController.addToCart);
router.get('/:customerId', cartController.getCart);
router.put('/update/:cartId', cartController.updateCartItem);
router.delete('/remove/:cartId', cartController.removeFromCart);

module.exports = router;
