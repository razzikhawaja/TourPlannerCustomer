const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importing routes
const customerRoutes = require('./Routes/Customer');
const reviewRoutes = require('./Routes/Review');
const tourRoutes = require('./Routes/Tour');
const bookingRoutes = require('./Routes/Booking');
const wishlistRoutes = require('./Routes/Wishlist');
const cartRoutes = require('./Routes/Cart');

const app = express();

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Database connection
mongoose.connect("mongodb+srv://razzi:0984@cluster0.vuen418.mongodb.net/Project?retryWrites=true&w=majority").then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/cart', cartRoutes);

// Catch-all route for handling all other requests
app.use((req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

