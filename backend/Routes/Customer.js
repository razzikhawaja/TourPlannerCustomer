const express = require('express');
const router = express.Router();
const customerController = require('../Controller/CustomerController');

router.post('/register', customerController.registerCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.get('/:id', customerController.getCustomer);

module.exports = router;
