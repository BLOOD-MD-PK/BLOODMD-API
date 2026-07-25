module.exports = (req, res) => {
  res.json({ status: true, endpoint: "gemini", message: "Endpoint active and operational." });
};