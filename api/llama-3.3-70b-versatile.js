module.exports = (req, res) => {
  res.json({ status: true, endpoint: "llama-3.3-70b-versatile", message: "Endpoint active and operational." });
};