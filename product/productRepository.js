const { productModel } = require("../models");

async function createProduct(product) {
  try {
    const userProduct = await productModel.create(product);
    return userProduct;
  } catch (error) {
    throw new Error("createProduct 에러");
  }
}

module.exports = { createProduct };
