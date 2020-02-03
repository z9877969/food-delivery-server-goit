const http = require("http");
const url = require("url");
const path = require("path");
const router = require("./routes/router");

const startServer = port => {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);

    const routeDo = router[parsedUrl.pathname] || router.default;

    routeDo(req, res);
  });

  server.listen(port, err => {
    if (err) {
      return console.log("Something bad happened", err);
    }
    console.log("==============================");
    console.log(`Server starting on port --${port}`);
    console.log("==============================");
  });
};

module.exports = startServer;
