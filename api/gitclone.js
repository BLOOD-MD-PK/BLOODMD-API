module.exports = (req, res) => {
  res.json({ status: true, endpoint: "gitclone", message: "Endpoint active and operational." });
};