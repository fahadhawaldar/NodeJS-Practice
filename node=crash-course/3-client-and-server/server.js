const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");

  console.log(req.url, req.method); // printing the request url and method

  res.setHeader("Content-Type", "text/html"); // setting the content type to html
  res.write("<Pre>hello world</pre>"); // writing the response
  res.write("<h1>hello world</h1>"); // writing the response
  res.end(); // ending the response
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000"); // printing the listening message
});
