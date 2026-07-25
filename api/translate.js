module.exports = (req, res) => {
  res.json({ status: true, endpoint: "translate", message: "Endpoint active and operational." });
};