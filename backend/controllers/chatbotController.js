const chatbotAPI = require('../utils/chatbotAPI');

// @desc    Query the chatbot
// @route   POST /api/chatbot/query
// @access  Public
exports.query = async (req, res) => {
  const prompt = req.body.prompt || '';
  const response = await chatbotAPI.queryChatbot(prompt);
  res.json({ prompt, response });
};