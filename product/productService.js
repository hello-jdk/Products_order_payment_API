const productRepository = require("./productRepository");

async function createProduct(product) {
  await productRepository.createProduct(product);
}

module.exports = { createProduct };
