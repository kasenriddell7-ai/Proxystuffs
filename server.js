const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

app.use('/', createProxyMiddleware({
    target: 'https://www.google.com/?zx=1791507255506',
    changeOrigin: true
}));

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});