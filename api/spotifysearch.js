module.exports = (req, res) => {
  res.json({ status: true, endpoint: "spotifysearch", message: "Endpoint active and operational." });
};