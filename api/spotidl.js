module.exports = (req, res) => {
  res.json({ status: true, endpoint: "spotidl", message: "Endpoint active and operational." });
};