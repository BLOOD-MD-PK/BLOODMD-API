const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicDir = path.join(__dirname, '../public');

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.use(express.static(publicDir));

app.get('/api/:endpoint', (req, res) => {
  const { endpoint } = req.params;
  const filePath = path.join(__dirname, `${endpoint}.js`);

  if (fs.existsSync(filePath)) {
    try {
      const handler = require(filePath);
      if (typeof handler === 'function') {
        return handler(req, res);
      } else {
        return res.json({ status: true, message: `Endpoint '${endpoint}' active.` });
      }
    } catch (err) {
      return res.status(500).json({ status: false, error: err.message });
    }
  } else {
    return res.status(404).json({ status: false, error: `API Endpoint '/api/${endpoint}' not found.` });
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDir, '404.html'));
});

module.exports = app;
