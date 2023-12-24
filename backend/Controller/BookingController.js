const Booking = require('../Models/BookingModel');

const BookingController = {
    // Create a new booking
    createBooking: async (req, res) => {
        try {
            const newBooking = new Booking({
                tour: req.body.tourId,
                customer: req.body.customerId,
                bookingDate: req.body.bookingDate,
                status: req.body.status // e.g., 'confirmed', 'pending'
            });

            const savedBooking = await newBooking.save();
            res.status(201).send(savedBooking);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Update an existing booking
    updateBooking: async (req, res) => {
        try {
            const updatedBooking = await Booking.findByIdAndUpdate(
                req.params.bookingId,
                {
                    $set: req.body // Update fields provided in req.body
                },
                { new: true } // Return the updated object
            );

            if (!updatedBooking) {
                return res.status(404).send('Booking not found.');
            }

            res.send(updatedBooking);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Delete a booking
    deleteBooking: async (req, res) => {
        try {
            const booking = await Booking.findByIdAndRemove(req.params.bookingId);

            if (!booking) {
                return res.status(404).send('Booking not found.');
            }

            res.send({ message: 'Booking successfully deleted.' });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Get details of a specific booking
    getBookingDetails: async (req, res) => {
        try {
            const booking = await Booking.findById(req.params.bookingId)
                                          .populate('tour') // Assuming you want to populate tour details
                                          .populate('customer'); // Assuming you want to populate customer details

            if (!booking) {
                return res.status(404).send('Booking not found.');
            }

            res.send(booking);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
};

module.exports = BookingController;
