module.exports = (req, res) => {
  res.json({ status: true, endpoint: "ttsearch", message: "Endpoint active and operational." });
};