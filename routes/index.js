const express = require('express');
const router = express.Router();


router.use('/bookings', require('./bookings'));
router.use('/bookingsLocal', require('./bookingsLocal'));
router.use('/users', require('./users'));



module.exports = router;
