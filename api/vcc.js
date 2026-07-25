module.exports = (req, res) => {
  res.json({ status: true, endpoint: "vcc", message: "Endpoint active and operational." });
};