const http = require("http");
const port = Number(process.env.PORT || 10000);
const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("beamsi render smoke");
});
server.listen(port, () => {
  console.log(`smoke server listening on ${port}`);
});