const Trip = require('../models/Trip');

exports.listTrips = (req, res) => {
  try {
    const trips = Trip.getAllTrips();
    res.json({ trips });
  } catch (err) {
    res.status(500).json({ error: 'Failed to list trips' });
  }
};

exports.createTrip = (req, res) => {
  try {
    const payload = req.body || {};
    const trip = Trip.addTrip(payload);
    res.status(201).json({ trip });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create trip' });
  }
};