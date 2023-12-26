const Tour = require('../Models/TourModel');
const Booking = require('../Models/BookingModel');

const TourController = {
    // Search for tours
    searchTours: async (req, res) => {
        try {
            const searchCriteria = req.query; 

            const tours = await Tour.find(searchCriteria);

            if (tours.length === 0) {
                return res.status(404).send('No tours found matching the criteria.');
            }

            res.send(tours);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Book a tour
    bookTour: async (req, res) => {
        try {
            const { tourId, customerId, bookingDate } = req.body;

            const newBooking = new Booking({
                tour: tourId,
                customer: customerId,
                bookingDate,
                status: 'pending' 
            });

            await newBooking.save();
            res.status(201).send({ message: 'Tour booked successfully', booking: newBooking });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Get details of a specific tour
    getTourDetails: async (req, res) => {
        try {
            const tourId = req.params.tourId;

            const tour = await Tour.findById(tourId);

            if (!tour) {
                return res.status(404).send('Tour not found.');
            }

            res.send(tour);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
};

module.exports = TourController;
