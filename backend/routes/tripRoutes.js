const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// Get all trips
router.get('/', tripController.listTrips);

// Create a new trip
router.post('/', tripController.createTrip);

module.exports = router;