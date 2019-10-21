const express = require('express');
const cors = require('cors');
const httpProxy = require('http-proxy');

const app = express();
const target = 'https://www.toggl.com';
const proxy = httpProxy.createProxyServer();

app.use(cors());
proxy.on('proxyReq', function (proxyReq, req) {
  if (req.body && req.body.time_entry) {
    const bodyData = JSON.stringify(req.body);
    proxyReq.setHeader('Content-Type','application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    proxyReq.write(bodyData);
  }
});
proxy.on('error', function (err, req, res) {
  console.log(err);
  res.end('Something went wrong. And we are reporting a custom error message.');
});
app.use('/', (req, res) => {
  console.log('proxy running');
  proxy.web(req, res, { changeOrigin: true, target });
});
exports.togglProxy = app;
