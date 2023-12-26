const Cart = require('../Models/CartModel');

const CartController = {
    addToCart: async (req, res) => {
        const customerId = req.body.customerId;
        const tourId = req.body.tourId;
        const quantity = req.body.quantity || 1; 

        try {
            let cart = await Cart.findOne({ customer: customerId });

            if (!cart) {
                cart = new Cart({ customer: customerId, items: [] });
            }

            const index = cart.items.findIndex(item => item.tour.toString() === tourId);
            if (index > -1) {
                cart.items[index].quantity += quantity;
            } else {
                cart.items.push({ tour: tourId, quantity: quantity });
            }

            await cart.save();
            res.status(201).send(cart);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Get the cart for a customer
    getCart: async (req, res) => {
        const customerId = req.params.customerId;

        try {
            const cart = await Cart.findOne({ customer: customerId })
                                   .populate('items.tour'); 

            if (!cart) {
                return res.status(404).send('Cart not found.');
            }

            res.send(cart);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Update a cart item
    updateCartItem: async (req, res) => {
        const cartId = req.params.cartId;
        const tourId = req.body.tourId;
        const quantity = req.body.quantity;

        try {
            const cart = await Cart.findById(cartId);

            if (!cart) {
                return res.status(404).send('Cart not found.');
            }

            const itemIndex = cart.items.findIndex(item => item.tour.toString() === tourId);

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity = quantity;
                await cart.save();
                res.send(cart);
            } else {
                res.status(404).send('Item not found in cart.');
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Remove an item from the cart
    removeFromCart: async (req, res) => {
        const cartId = req.params.cartId;
        const tourId = req.body.tourId;

        try {
            const cart = await Cart.findById(cartId);

            if (!cart) {
                return res.status(404).send('Cart not found.');
            }

            cart.items = cart.items.filter(item => item.tour.toString() !== tourId);

            await cart.save();
            res.send(cart);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
};

module.exports = CartController;
