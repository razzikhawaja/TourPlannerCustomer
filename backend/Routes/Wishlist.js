const express = require('express');
const router = express.Router();
const wishlistController = require('../Controller/WishlistController');

router.post('/add', wishlistController.addToWishlist);
router.get('/:customerId', wishlistController.getWishlist);
router.delete('/remove', wishlistController.removeFromWishlist);

module.exports = router;
