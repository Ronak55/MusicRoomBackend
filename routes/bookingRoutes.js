const express = require('express');
const { createBooking, getBookingsByUser } = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, getBookingsByUser);

module.exports = router;
