
const fs = require("fs");

function serverListener(req, res) {
  console.log(req.url, req.method);
  if (req.url === "/") {
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
  if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
    // reading chunks
    const body = [];

    req.on("data", (chunks) => {
      // this prints the chunks that it recieves as data
      // runs till it it gets data sterem
      console.log(chunks);
      // keeps on adding the chunks into the array
      body.push(chunks);
    });

    // once it revies the whole data and user stops sending the data end function runs that concatinatres
    req.on("end", () => {
      // after complete transfer ,we have to convert thatv unreadabale chunck into unserstandable data

      // for that we concatinate and stringify using a buffer

      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      // now we recieved a url which is ununderstandable,to decode that url we use urlSearchparams class by creating a object

      // this retuns a object of key,value pairs
      const params = new URLSearchParams(parsedBody);


      
      // const obj = {};
      // for (const [key, val] of params.entries()) {
      //   obj[key] = val;
      // }


      // istead we use

      const obj = Object.fromEntries(params);

      fs.writeFileSync('details.txt', JSON.stringify(obj));
      console.log(obj);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");

 
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
    <head> <title> default </title> </head>
    <body> <h1>default </h1> </body>
    </html>`);
  res.end();
}



module.exports = serverListener;