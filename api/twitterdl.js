module.exports = (req, res) => {
  res.json({ status: true, endpoint: "twitterdl", message: "Endpoint active and operational." });
};