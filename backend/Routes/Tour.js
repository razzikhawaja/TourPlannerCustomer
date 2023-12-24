const express = require('express');
const router = express.Router();
const tourController = require('../Controller/TourController');

router.get('/search', tourController.searchTours);
router.post('/book', tourController.bookTour);
router.get('/:tourId', tourController.getTourDetails);

module.exports = router;
