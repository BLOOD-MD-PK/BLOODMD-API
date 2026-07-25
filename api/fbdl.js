module.exports = (req, res) => {
  res.json({ status: true, endpoint: "fbdl", message: "Endpoint active and operational." });
};