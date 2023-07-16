const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plan" });
  res.end("hello world\n");
});

server.listen(4000, () => {
  console.log("server starting");
});

