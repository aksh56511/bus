const googleAPI = require('../utils/googleAPI');

exports.autocomplete = async (req, res) => {
  const q = req.query.q || '';
  const data = await googleAPI.autocomplete(q);
  res.json({ q, data });
};

exports.details = async (req, res) => {
  const placeId = req.query.placeId;
  const data = await googleAPI.getPlaceDetails(placeId);
  res.json({ placeId, data });
};