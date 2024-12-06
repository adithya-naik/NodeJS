// we will learn how to create server

// first we have to import http to create server

const http = require("http");

function serverListener(req, res) {
  // console.log(req);
  // console.log(` Url : ${req.url} , Methods : ${req.method} ,Headers :  ${req.headers}`);
  console.log(req.url, req.method);
  // process.exit();

  // sending response

  // routing response
  // better chek the method also in the submitting data (depednds on teh case,here its not needed)
  if (req.url === '/') {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head> <title> Home </title> </head>
    <body> <h1>Home content </h1> </body>
    </html>`);
    return res.end();
  } else if (req.url === '/about') {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head> <title> About </title> </head>
    <body> <h1>About </h1> </body>
    </html>`);
    return res.end();
  } else if (req.url === '/contact') {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head> <title> contact </title> </head>
    <body> <h1>contact </h1> </body>
    </html>`);
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
    <head> <title> default </title> </head>
    <body> <h1>default </h1> </body>
    </html>`);
  res.end();
}

// under fucntion returns a obj and that can be used to listen
const server = http.createServer(serverListener);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server Started at  : http://localhost:${PORT}`);
});
