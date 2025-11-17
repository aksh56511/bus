const axios = require("axios");

const key = process.env.GOOGLE_API_KEY;

exports.getCoordinates = async (place) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${key}`;
  const res = await axios.get(url);

  const loc = res.data.results[0].geometry.location;
  return {
    name: place,
    lat: loc.lat,
    lng: loc.lng,
  };
};

exports.getDirections = async (from, to) => {
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${from.lat},${from.lng}&destination=${to.lat},${to.lng}&key=${key}`;
  const res = await axios.get(url);

  const leg = res.data.routes[0].legs[0];

  return {
    distance: leg.distance.value / 1000,
    eta: leg.duration.text,
    route: leg.steps.map((s) => s.html_instructions.replace(/<[^>]*>/g, "")),
  };
};

exports.getNearby = async (lat, lng, type) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=${type}&key=${key}`;
  const res = await axios.get(url);

  return res.data.results;
};
