module.exports = (req, res) => {
  res.json({ status: true, endpoint: "tiktok-nsfw", message: "Endpoint active and operational." });
};