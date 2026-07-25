module.exports = (req, res) => {
  res.json({ status: true, endpoint: "searchgroups", message: "Endpoint active and operational." });
};