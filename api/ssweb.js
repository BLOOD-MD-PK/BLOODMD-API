module.exports = (req, res) => {
  res.json({ status: true, endpoint: "ssweb", message: "Endpoint active and operational." });
};