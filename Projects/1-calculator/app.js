const http = require('http');
const handler = require('./handler');
const server = http.createServer(handler);
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server Started at  : http://localhost:${PORT}`);
});