const Wishlist = require('../Models/WishlistModel');

const WishlistController = {
    // Add a tour to the wishlist
    addToWishlist: async (req, res) => {
        try {
            const customerId = req.body.customerId;
            const tourId = req.body.tourId;

            let wishlist = await Wishlist.findOne({ customer: customerId });

            if (!wishlist) {
                wishlist = new Wishlist({ customer: customerId, tours: [] });
            }

            if (!wishlist.tours.includes(tourId)) {
                wishlist.tours.push(tourId);
            }

            await wishlist.save();
            res.status(201).send({ message: 'Tour added to wishlist', wishlist });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Get a customer's wishlist
    getWishlist: async (req, res) => {
        try {
            const customerId = req.params.customerId;

            const wishlist = await Wishlist.findOne({ customer: customerId })
                                           .populate('tours'); // Populate tour details

            if (!wishlist) {
                return res.status(404).send('Wishlist not found.');
            }

            res.send(wishlist);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Remove a tour from the wishlist
    removeFromWishlist: async (req, res) => {
        try {
            const customerId = req.body.customerId;
            const tourId = req.body.tourId;

            const wishlist = await Wishlist.findOne({ customer: customerId });

            if (!wishlist) {
                return res.status(404).send('Wishlist not found.');
            }

            wishlist.tours = wishlist.tours.filter(id => id.toString() !== tourId);

            await wishlist.save();
            res.send({ message: 'Tour removed from wishlist', wishlist });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
};

module.exports = WishlistController;
