const path = require('path');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookDB');


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Express server running on port', port)
});
