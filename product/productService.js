const productRepository = require("./productRepository");
const { BadRequestError } = require("../httpErrors");

async function createProduct(product) {
  await productRepository.createProduct(product);
}

async function getProduct(id) {
  const product = await productRepository.getProductById(id);
  if (!product) {
    throw new BadRequestError("id에 해당하는 상품이 없습니다.");
  }
  return product;
}

async function updateProduct(product) {
  const updatedProductCount = await productRepository.updateProduct(product);
  if (updatedProductCount != 1) {
    throw new BadRequestError("id에 해당하는 상품이 없습니다.");
  }
  return true;
}

async function deleteProduct(id) {
  const deletedProductCount = await productRepository.deleteProductById(id);
  if (deletedProductCount != 1) {
    throw new BadRequestError("id에 해당하는 상품이 없습니다.");
  }
  return true;
}

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };
