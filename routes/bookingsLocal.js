const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsLocal');


router.get('/bookLocal', bookingsController.getBookings);


module.exports = router;
