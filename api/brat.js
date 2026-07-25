module.exports = (req, res) => {
  res.json({ status: true, endpoint: "brat", message: "Endpoint active and operational." });
};