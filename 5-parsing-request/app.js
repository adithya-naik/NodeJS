const http = require("http");
const serverListener = require('./userinput');



const server = http.createServer(serverListener);



const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server Started at  : http://localhost:${PORT}`);
});
