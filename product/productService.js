const productRepository = require("./productRepository");
const userRepository = require("../user/userRepository");
const productUtil = require("./productUtil");
const { BadRequestError, ForbiddenError } = require("../httpErrors");

async function createProduct(product) {
  //권한확인
  const user = await userRepository.getUserById(product.userId);
  if (!user) {
    throw new BadRequestError("id에 해당하는 유저가 없습니다.");
  }

  if (productUtil.authValidation(user.grade)) {
    return await productRepository.createProduct(product);
  }
  throw new ForbiddenError("일반 이용자는 권한이 없습니다.");
}

async function getProduct(id) {
  const product = await productRepository.getProductById(id);
  if (!product) {
    throw new BadRequestError("id에 해당하는 상품이 없습니다.");
  }
  return product;
}

async function updateProduct(product) {
  //권한확인
  const user = await userRepository.getUserById(product.userId);
  if (!user) {
    throw new BadRequestError("id에 해당하는 유저가 없습니다.");
  }

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
