const functions = require('firebase-functions');
exports.togglNestHub = functions.https.onRequest((req, res) => {
  concole.log('hello');
  res.send('hello, world');
});
