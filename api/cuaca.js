module.exports = (req, res) => {
  res.json({ status: true, endpoint: "cuaca", message: "Endpoint active and operational." });
};