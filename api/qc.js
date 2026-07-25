module.exports = (req, res) => {
  res.json({ status: true, endpoint: "qc", message: "Endpoint active and operational." });
};