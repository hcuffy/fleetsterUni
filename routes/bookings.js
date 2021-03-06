const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings');


router.post('/bookDB', bookingsController.createBooking);
router.get('/bookDB', bookingsController.getBookings);
router.get('/bookDB/:id', bookingsController.getSingleBooking);
router.put('/bookDB/:id', bookingsController.updateBooking);
router.delete('/bookDB/:id', bookingsController.deleteBooking);


module.exports = router;
