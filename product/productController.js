const { StatusCodes } = require("http-status-codes");
const productService = require("./productService");

async function createProduct(req, res, next) {
  const product = req.body;
  try {
    await productService.createProduct(product);
    return res.status(StatusCodes.CREATED).send({ message: "CREATED" });
  } catch (error) {
    next(error);
  }
}

module.exports = { createProduct };
