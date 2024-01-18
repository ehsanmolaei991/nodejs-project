const http = require("http");
const { create, find } = require("./controllers/product.controller");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/products" && req.method === "POST") {
    return create(req, res);
  }

  if (req.url === "/products" && req.method === "GET") {
    return find(req, res);
  }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
