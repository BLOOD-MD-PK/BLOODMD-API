module.exports = (req, res) => {
  res.json({ status: true, endpoint: "npmsearch", message: "Endpoint active and operational." });
};