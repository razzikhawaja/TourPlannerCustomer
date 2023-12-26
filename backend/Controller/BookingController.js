const Booking = require('../Models/BookingModel');

const BookingController = {
    createBooking: async (req, res) => {
        try {
            const newBooking = new Booking({
                tour: req.body.tourId,
                customer: req.body.customerId,
                bookingDate: req.body.bookingDate,
                status: req.body.status 
            });

            const savedBooking = await newBooking.save();
            res.status(201).send(savedBooking);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    updateBooking: async (req, res) => {
        try {
            const updatedBooking = await Booking.findByIdAndUpdate(
                req.params.bookingId,
                {
                    $set: req.body 
                },
                { new: true } 
            );

            if (!updatedBooking) {
                return res.status(404).send('Booking not found.');
            }

            res.send(updatedBooking);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

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

    getBookingDetails: async (req, res) => {
        try {
            const booking = await Booking.findById(req.params.bookingId)
                                          .populate('tour') 
                                          .populate('customer'); 

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
