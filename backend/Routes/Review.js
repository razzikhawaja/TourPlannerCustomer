const express = require('express');
const router = express.Router();
const reviewController = require('../Controller/ReviewController');

router.post('/add', reviewController.addReview);
router.get('/tour/:tourId', reviewController.getReviewsForTour);

module.exports = router;
