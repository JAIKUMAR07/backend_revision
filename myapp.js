const http = require("http");
// http ko variable me store

// server create
const server = http.createServer((req, res) => {
  // server me req aaya to send

  // bar bar request jayega server me to server me kon sa url hai wo print hoga console
  // ke through
  console.log(req.url);

  if (req.url == "/about") {
    res.end("mein to about me hu");
  }
  if (req.url == "/contact") {
    res.end("mein to contact me hu");
  }

  if (req.url == "/*") {
    res.end(" pta nhi kaha hu ");
  }
  // us server me response
});

// ye server ko yaha se  dekhnge
server.listen(3001);
