const express = require('express');
const router = express.Router();
const {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getOrders, // New function
    updateOrderToDelivered // New function
} = require('../controllers/Order');
const { protect, isAdmin } = require('../middleware/auth');

// Create a new order
router.post('/', protect, addOrderItems);

// Get all orders (admin only)
router.get('/', protect, isAdmin, getOrders);  // New route

// Get a specific order by ID
router.get('/:id', protect, getOrderById);

// Update order to paid
router.put('/:id/pay', protect, updateOrderToPaid);

// Mark order as delivered (admin only)
router.put('/:id/deliver', protect, isAdmin, updateOrderToDelivered);  // New route

// Get logged-in user orders
router.get('/myorders', protect, getMyOrders);

module.exports = router;
