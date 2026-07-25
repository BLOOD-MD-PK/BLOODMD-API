module.exports = (req, res) => {
  res.json({ status: true, endpoint: "nsfw-corean", message: "Endpoint active and operational." });
};