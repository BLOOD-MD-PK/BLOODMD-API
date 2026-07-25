module.exports = (req, res) => {
  res.json({ status: true, endpoint: "googlesearch", message: "Endpoint active and operational." });
};