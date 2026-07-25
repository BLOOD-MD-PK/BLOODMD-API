module.exports = (req, res) => {
  res.json({ status: true, endpoint: "getpastebin", message: "Endpoint active and operational." });
};