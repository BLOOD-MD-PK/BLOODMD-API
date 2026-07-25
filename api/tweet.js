module.exports = (req, res) => {
  res.json({ status: true, endpoint: "tweet", message: "Endpoint active and operational." });
};