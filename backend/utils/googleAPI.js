const axios = require('axios');

const KEY = process.env.GOOGLE_API_KEY || '';

exports.autocomplete = async (input) => {
  // simple stub; replace with real Google Places HTTP call
  if (!input) return [];
  return [{ description: `Mock suggestion for "${input}"`, place_id: 'mock1' }];
};

exports.getPlaceDetails = async (placeId) => {
  // stub - replace with actual Google Places details call
  return { placeId, name: 'Mock Place', location: { lat: 0, lng: 0 } };
};
