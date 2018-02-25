const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsLocal');


router.post('/bookLocal', bookingsController.createBooking);
router.get('/bookLocal', bookingsController.getBookings);
router.get('/bookLocal/:id', bookingsController.getSingleBooking);
router.put('/bookLocal/:id', bookingsController.updateBooking);
router.delete('/bookLocal/:id', bookingsController.deleteBooking);


module.exports = router;
