const { ProductModal } = require("../models/product.model");

async function find(req, res) {
  try {
    const products = await ProductModal.find();
    res.writeHead(201, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function findById(req, res) {}

async function create(req, res) {
  try {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", async () => {
      const product = await ProductModal.create(body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    });
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {}

async function remove(req, res) {}

module.exports = {
  find,
  create,
};
