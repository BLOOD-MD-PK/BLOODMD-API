module.exports = (req, res) => {
  res.json({ status: true, endpoint: "emojimix", message: "Endpoint active and operational." });
};