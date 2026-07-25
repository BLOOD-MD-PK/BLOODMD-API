module.exports = (req, res) => {
  res.json({ status: true, endpoint: "txt2img", message: "Endpoint active and operational." });
};