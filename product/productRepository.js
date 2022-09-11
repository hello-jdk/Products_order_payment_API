const { productModel } = require("../models");

async function createProduct(product) {
  try {
    const createdProduct = await productModel.create(product);
    return createdProduct;
  } catch (error) {
    throw new Error("createProduct 에러");
  }
}

async function getProductById(id) {
  try {
    const product = await productModel.findByPk(id, {
      attributes: ["id", "name", "price", "priceDiscount", "stock"],
      raw: true,
    });
    return product;
  } catch (error) {
    throw new Error("getProductById 에러");
  }
}

module.exports = { createProduct, getProductById };
