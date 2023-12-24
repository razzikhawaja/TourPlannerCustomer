const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    items: [{
        tour: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
        quantity: Number,
    }],
});

module.exports = mongoose.model('Cart', cartSchema);
