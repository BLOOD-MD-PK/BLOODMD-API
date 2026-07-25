module.exports = (req, res) => {
  res.json({ status: true, endpoint: "duckduckgo", message: "Endpoint active and operational." });
};