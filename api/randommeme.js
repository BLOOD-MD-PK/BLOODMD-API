module.exports = (req, res) => {
  res.json({ status: true, endpoint: "randommeme", message: "Endpoint active and operational." });
};