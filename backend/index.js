const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const customerRoutes = require('./Routes/Customer');
const reviewRoutes = require('./Routes/Review');
const tourRoutes = require('./Routes/Tour');
const bookingRoutes = require('./Routes/Booking');
const wishlistRoutes = require('./Routes/Wishlist');
const cartRoutes = require('./Routes/Cart');

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://razzi:0984@cluster0.vuen418.mongodb.net/Project?retryWrites=true&w=majority").then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/api/customers', customerRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/cart', cartRoutes);

app.use((req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

