const fs = require('fs');


exports.createBooking = (req, res, next) => {
  const {
    type,
    startDateTime,
    endDateTime
  } = req.query;

  const id = Date.now().toString();
  let booking = {
    id: id,
    type: type,
    startDateTime: startDateTime,
    endDateTime: endDateTime
  };
  fs.readFile('bookings.json', function (err, data) {
    if (err)
      return next(err);
    else if (data.length === 0) {
      let newEntry = [booking];
      fs.writeFile('bookings.json', JSON.stringify(newEntry), 'utf8', function (err) {
        if (err)
          return next(err);
        res.send(['success']);
      });
    } else {
      let currentBooking = JSON.parse(data);
      currentBooking.push(booking);
      fs.writeFile('bookings.json', JSON.stringify(currentBooking), 'utf8', function (err) {
        if (err)
          return next(err);
        res.send(['success']);
      });
    }
  });
}

exports.getBookings = (req, res, next) => {
  fs.readFile('bookings.json', function (err, data) {
    if (err)
      return next(err);
    let currentBooking = JSON.parse(data);
    res.send(data);
  });
}

exports.getSingleBooking = (req, res, next) => {
  const id = req.params.id;
  fs.readFile('bookings.json', function (err, data) {
    if (err)
      return next(err);
    let currentBookings = JSON.parse(data);
    currentBookings.forEach(function (booking) {
      if (booking.id === id) {
        res.send(booking);
      } else {
        res.send('Booking does not exist');
      }
    });
  });
}

exports.updateBooking = (req, res, next) => {
  const id = req.params.id;
  const {
    type,
    startDateTime,
    endDateTime
  } = req.query;

  fs.readFile('bookings.json', function (err, data) {
    if (err)
      return next(err);
    let currentBookings = JSON.parse(data);

    currentBookings.forEach(function (booking) {
      if (booking.id === id) {
        booking.type = type;
        booking.startDateTime = startDateTime;
        booking.endDateTime = endDateTime;
        fs.writeFile('bookings.json', JSON.stringify(currentBookings), 'utf8', function (err) {
          if (err)
            return next(err);
          res.send(['success']);
        });
      }
    });
  });
}

exports.deleteBooking = (req, res, next) => {
  const id = req.params.id;

  fs.readFile('bookings.json', function (err, data) {
    if (err)
      return next(err);
    let currentBookings = JSON.parse(data);

    currentBookings.forEach(function (booking,idx) {
      if (booking.id === id) {
        currentBookings.splice(idx,1);
        fs.writeFile('bookings.json', JSON.stringify(currentBookings), 'utf8', function (err) {
          if (err)
            return next(err);
          res.send(['success']);
        });
      }
    });
  });

}
