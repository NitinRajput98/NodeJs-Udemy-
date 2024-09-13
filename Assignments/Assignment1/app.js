const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Page create with Node.js</title></head>");
    res.write(
      "<body><h1>My User Form</h1><form action='/create-user' method='POST'><input type='text' name='username'/><button type='submit'>Submit!</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Page create with Node.js</title></head>");
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const requestData = [];
    req.on("data", (chunk) => {
      requestData.push(chunk);
    });
    req.on("end", (err) => {
      const data = Buffer.concat(requestData).toString();
      const username = data.split("=")[1];
      console.log(username);
    });
    res.statusCode = "301";
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3000);
