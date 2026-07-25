module.exports = (req, res) => {
  res.json({ status: true, endpoint: "qrcodegenerator", message: "Endpoint active and operational." });
};