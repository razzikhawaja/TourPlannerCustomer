const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    duration: String,
});

module.exports = mongoose.model('Tour', tourSchema);
