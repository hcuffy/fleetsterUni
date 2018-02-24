const express = require('express');
const router = express.Router();


router.use('/bookings', require('./bookings'));
router.use('/bookingsLocal', require('./bookingsLocal'));

router.get('/*', (req, res) => {
  res.send('Hello World');
});


module.exports = router;
