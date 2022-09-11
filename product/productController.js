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

async function getProduct(req, res, next) {
  const id = req.params.id;
  try {
    const product = await productService.getProduct(id);
    return res.status(StatusCodes.OK).send({ message: "OK", data: product });
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  const product = req.body;
  try {
    await productService.updateProduct(product);
    return res.status(StatusCodes.CREATED).send({ message: "UPDATED" });
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  const id = req.params.id;
  try {
    await productService.deleteProduct(id);
    return res.status(StatusCodes.OK).send({ message: "DELETED" });
  } catch (error) {
    next(error);
  }
}

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };
