module.exports = (req, res) => {
  res.json({ status: true, endpoint: "pinterest", message: "Endpoint active and operational." });
};