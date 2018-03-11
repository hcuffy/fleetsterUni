const express = require('express');
const app = express();
const User = require('../models/user');

exports.createNewUser = (req, res, next) => {
  const formData = JSON.parse(Object.keys(req.body)[0]);
  const {
    username,
    password
  } = formData;

  User.findOne({
    username
  }, (err, user) => {
    if (err) return next(err);
    if (user) {
      return console.log('This username already exists.')
    }
    const newUser = new User({
      username,
      password
    })
    newUser.save(function (err) {
      if (err) return next(err);
      req.login(newUser, (err) => {
        if (err) return next(err);
        res.sendStatus(200);
        // res.redirect('/bookings/bookDB');
      })
    })
  });
}

exports.getLogout = (req, res, next) => {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
}
