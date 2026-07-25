module.exports = (req, res) => {
  res.json({ status: true, endpoint: "spotifydl", message: "Endpoint active and operational." });
};