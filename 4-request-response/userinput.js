// we will learn how to create server

// first we have to import http to create server

const http = require("http");

// for writing the data into the file
const fs = require('fs');

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
    <head> <title> Welcome  </title> </head>
    <body> <h1>Fill the form</h1>


    <form action = "/submit-details" method = "POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required /> <br /><br />
  <label>Gender:</label>
  <label for="male">
    <input type="radio" id="male" name="gender" value="male" required /> Male
  </label>
  <label for="female">
    <input type="radio" id="female" name="gender" value="female" /> Female
  </label>
  <label for="other">
    <input type="radio" id="other" name="gender" value="other" /> Other
  </label>
  <br /><br />
  <button type="submit">Submit</button>
</form>

    </body>
    </html>`);
    return res.end();
  } 
  if(req.url.toLowerCase() === '/submit-details' && req.method == 'POST'){
    fs.writeFileSync("details.txt","Adithya Naik");
    res.statusCode = 302;
    res.setHeader('Location','/');
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
