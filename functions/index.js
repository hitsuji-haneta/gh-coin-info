const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => {
  // cors(req, res, () => {});
  console.log('hello');
  res.json({
    message: 'Hello,world'
  });
});
const api = functions.https.onRequest(app);
exports.togglProxy = { api };
