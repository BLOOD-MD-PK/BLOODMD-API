module.exports = (req, res) => {
  res.json({ status: true, endpoint: "kompasnews", message: "Endpoint active and operational." });
};