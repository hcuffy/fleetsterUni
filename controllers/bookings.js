const Booking = require('../models/booking');


exports.createBooking = (req, res, next) => {
  const {
    type,
    startDateTime,
    endDateTime
  } = req.query;

  const newBooking = new Booking({
    type,
    startDateTime,
    endDateTime
  });
  newBooking.save(err => {
    if (err)
      return next(err)
  });
  res.send(['success']);

};

exports.getBookings = (req, res, next) => {
  Booking.find({}, (err, data) => {
    if (err)
      return next(err)
    res.send(data);
  });
}

exports.getSingleBooking = (req, res, next) => {
  const id = req.params.id;
  Booking.findById({
    _id: id
  }, (err, data) => {
    if (err)
      return next(err)
    res.send(data);
  });
}

exports.updateBooking = (req, res, next) => {
  const id = req.params.id;
  const {
    type,
    startDateTime,
    endDateTime
  } = req.query;

  Booking.update({
    _id: id
  }, {
    $set: {
      type: type,
      startDateTime: startDateTime,
      endDateTime: endDateTime
    }
  }, function (err) {
    if (err) {
      return next(err);

    } else {
      res.send(['success']);
    }
  });
}


exports.deleteBooking = (req, res, next) => {
  const id = req.params.id;

  Booking.remove({
    _id: id
  }, function (err) {
    if (err) {
      return next(err);

    } else {
      res.send(['success']);
    }
  });

}
