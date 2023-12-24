const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tour' }], // Array of tour IDs
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
