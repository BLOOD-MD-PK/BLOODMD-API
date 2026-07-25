module.exports = (req, res) => {
  res.json({ status: true, endpoint: "readqr", message: "Endpoint active and operational." });
};