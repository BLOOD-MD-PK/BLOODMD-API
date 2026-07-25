module.exports = (req, res) => {
  res.json({ status: true, endpoint: "ytsearch", message: "Endpoint active and operational." });
};