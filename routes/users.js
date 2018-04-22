const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users');
require('../config/passport')(passport);


router.get('/logout', userController.getLogout);
router.post('/signup', userController.createNewUser);
console.log('test');
router.post('/signin', passport.authenticate('local', {
  successRedirect: '/bookings/bookDB',
  failureRedirect: '/users/signup'
}));

module.exports = router;
