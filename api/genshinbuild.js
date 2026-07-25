module.exports = (req, res) => {
  res.json({ status: true, endpoint: "genshinbuild", message: "Endpoint active and operational." });
};