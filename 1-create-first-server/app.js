// we will learn how to create server

// first we have to import http to create server

const http = require('http');

function serverListener(req,res){
  console.log(req);
}

// under fucntion returns a obj and that can be used to listen
const server = http.createServer(serverListener);

const PORT = 3001;

server.listen(PORT , ()=>{
  console.log(`Server Started at  : http://localhost:${PORT}`)
})
