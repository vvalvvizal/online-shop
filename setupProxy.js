const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "https://localhost:3000",
    createProxyMiddleware({
      target: "https://localhost:3001",
      changeOrigin: true,
    })
  );
};
