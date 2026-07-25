module.exports = (req, res) => {
  res.json({ status: true, endpoint: "gistalk", message: "Endpoint active and operational." });
};