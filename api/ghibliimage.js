module.exports = (req, res) => {
  res.json({ status: true, endpoint: "ghibliimage", message: "Endpoint active and operational." });
};