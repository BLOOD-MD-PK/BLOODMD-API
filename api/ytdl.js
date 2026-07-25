module.exports = (req, res) => {
  res.json({ status: true, endpoint: "ytdl", message: "Endpoint active and operational." });
};