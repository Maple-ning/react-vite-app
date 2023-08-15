const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app:any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://i.maoyan.com/api',
      changeOrigin: true,
    })
  );
};