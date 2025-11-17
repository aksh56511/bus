const axios = require("axios");

exports.generateResponse = async (message) => {
  try {
    const res = await axios.post(
      "https://api-inference.huggingface.co/models/google/flan-t5-large",
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
      }
    );

    return res.data[0].generated_text;
  } catch {
    return "Bot failed.";
  }
};
