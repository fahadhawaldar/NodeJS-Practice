const http = require("http");
const fs = require("fs"); // importing the fs module
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html"); // setting the content type to html
  //send an html file
  //reading files

  let path = "./views/"; // path to the views folder
  switch (req.url) {
    case "/":
      path += "index.html"; // path to the index.html file
      res.statusCode = 200; // setting the status code to 200
      break;
    case "/about":
      path += "about.html"; // path to the about.html file
      res.statusCode = 200; // setting the status code to 200
      break;
    case "/about-us":
      path += "about.html"; // path to the about.html file
      res.statusCode = 301; // setting the status code to 301
      res.setHeader("Location", "/about"); // setting the location header to /about
      res.end(); // ending the response
      break;
    default:
      path += "404.html"; // path to the 404.html file
      res.statusCode = 404; // setting the status code to 404
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err); // printing the error message
      res.end(); // ending the response
    } else {
      // res.write(data); // writing the data to the response
      res.end(data); // ending the response
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000 with routing"); // printing the listening message
});
