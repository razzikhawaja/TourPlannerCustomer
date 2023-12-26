const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TourModel', 
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomerModel', 
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
