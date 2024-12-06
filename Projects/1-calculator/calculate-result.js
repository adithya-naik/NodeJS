const calculate = (req, res) => {
  // console.log("Hello");

  const body = [];
  req.on("data", (chunck) => {
    // console.log(chunck);
    body.push(chunck);
  });

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    // console.log(parsedBody);

    const params = new URLSearchParams(parsedBody);

    const obj = Object.fromEntries(params);

    // console.log(obj);

    const result = Number(obj.number1) + Number(obj.number2);

    // console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`<html lang="en">
              <head>
                  <title>Simple Form</title>
              </head>
              <body>
                  <h2>Your ans = ${result}</h2>
                  
              </body>
            </html>`);
    res.end();
  });
};

module.exports = calculate;
