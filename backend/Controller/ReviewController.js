const Review = require('../Models/ReviewModel');

const ReviewController = {
    // Add a review
    addReview: async (req, res) => {
        try {
            const { tour, customer, rating, comment } = req.body;

            // Additional validation or business logic can be added here

            const newReview = new Review({
                tour, 
                customer, 
                rating, 
                comment
            });

            await newReview.save();
            res.status(201).send({ message: 'Review added successfully', review: newReview });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Get reviews for a specific tour
    getReviewsForTour: async (req, res) => {
        try {
            const tourId = req.params.tourId;

            const reviews = await Review.find({ tour: tourId })
                                        .populate('customer', 'name'); // Include customer's name

            if (reviews.length === 0) {
                return res.status(404).send('No reviews found for this tour.');
            }

            res.send(reviews);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
};

module.exports = ReviewController;
