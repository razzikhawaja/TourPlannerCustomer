const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tour',
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer', required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    status: String, 
});

module.exports = mongoose.model('Booking', bookingSchema);
