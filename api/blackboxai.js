module.exports = (req, res) => {
  res.json({ status: true, endpoint: "blackboxai", message: "Endpoint active and operational." });
};