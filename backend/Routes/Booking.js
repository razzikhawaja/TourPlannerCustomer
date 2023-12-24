const express = require('express');
const router = express.Router();
const bookingController = require('../Controller/BookingController');

router.post('/', bookingController.createBooking);
router.put('/:bookingId', bookingController.updateBooking);
router.delete('/:bookingId', bookingController.deleteBooking);
router.get('/:bookingId', bookingController.getBookingDetails);

module.exports = router;
