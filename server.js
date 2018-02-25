const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookDB');


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json('*/*'));
app.use(session({secret: 'fleetuni', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes');
app.use('/', routes);

app.use('*', function(req, res, next) {
  res.locals.user = req.user || null;
  res.locals.error = null;
  next();
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Express server running on port', port)
});
