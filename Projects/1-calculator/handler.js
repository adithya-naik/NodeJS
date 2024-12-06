const calculate = require('./calculate-result');


const handler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html lang="en">
      <head>
          <title>Simple Form</title>
      </head>
      <body>
      <h1> Welcome to Calculator </h2>
          <a href="/calculator">GO to Calculator</a>
          
      </body>
      </html>`);
    return res.end();
  }

  if (req.url === '/calculator') {
    res.setHeader("Content-Type", "text/html");
    res.write(`
<html lang="en">
<head>
    <title>Simple Form</title>
</head>
<body>
    <h2>Simple Form</h2>
    <form action="/calculate-result" method = "POST">
        <label for="number1">Number 1:</label>
        <input type="text" id="number1" name="number1" required>
        <br><br>
        <label for="number2">Number 2:</label>
        <input type="text" id="number2" name="number2" required>
        <br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`);
    return res.end();
  }

  if(req.url === '/calculate-result' && req.method == 'POST'){
   return  calculate(req,res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html lang="en">
    <head>
        <title>Simple Form</title>
    </head>
    <body>
        <h2>404 Not Found</h2>
        
    </body>
    </html>`);
  return res.end();
};

module.exports = handler;
