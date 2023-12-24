const Customer = require('../Models/CustomerModel');
const bcrypt = require('bcryptjs');

const CustomerController = {
    // Register a new customer
    registerCustomer: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            
            let customer = await Customer.findOne({ email });
            if (customer) {
                return res.status(400).send('Customer already registered.');
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            customer = new Customer({
                name,
                email,
                password: hashedPassword
            });

            await customer.save();
            res.status(201).send({ message: 'Customer registered successfully.' });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Update customer details
    updateCustomer: async (req, res) => {
        try {
            const customerId = req.params.id;
            const updateData = req.body;

            const customer = await Customer.findByIdAndUpdate(customerId, updateData, { new: true });

            if (!customer) {
                return res.status(404).send('Customer not found.');
            }

            res.send(customer);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Delete a customer
    deleteCustomer: async (req, res) => {
        try {
            const customerId = req.params.id;

            const customer = await Customer.findByIdAndDelete(customerId);

            if (!customer) {
                return res.status(404).send('Customer not found.');
            }

            res.send({ message: 'Customer deleted successfully.' });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    // Retrieve customer details
    getCustomer: async (req, res) => {
        try {
            const customerId = req.params.id;

            const customer = await Customer.findById(customerId);

            if (!customer) {
                return res.status(404).send('Customer not found.');
            }

            res.send(customer);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
};

module.exports = CustomerController;
