module.exports = (req, res) => {
  res.json({ status: true, endpoint: "welcome-goodbye-image", message: "Endpoint active and operational." });
};