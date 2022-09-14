const orderlistRepository = require("./orderlistRepository");

const userRespository = require("../user/userRepository");
const orderRepository = require("../order/orderRepository");
const productRespository = require("../product/productRepository");

const { BadRequestError } = require("../httpErrors");

async function createOrderlist(orderList) {
  //상품 재고 확인
  for (let i = 0; i < orderList.ordersList.length; i++) {
    const order = await orderRepository.getOrderById(orderList.ordersList[i]);
    let orderProductId = order.productId;
    let orderProductCount = order.productCount;

    const product = await productRespository.getProductById(orderProductId);
    let productStock = product.stock;

    if (orderProductCount > productStock) {
      throw new BadRequestError("[" + product.name + "]에 대한 재고가 부족합니다.");
    }
  }

  //주문내역리스트 생성
  orderList.ordersList = orderList.ordersList.join(",");
  await orderlistRepository.createOrderlist(orderList);
}
async function getOrderlists(userId) {
  //userId 확인
  const userValidation = await userRespository.getUserById(userId);
  if (!userValidation) {
    throw new BadRequestError("id에 해당하는 유저가 없습니다.");
  }

  //주문내역리스트 조회
  const orderLists = await orderlistRepository.getOrderlistsByUserId(userId);
  return orderLists;
}
async function getOrderlist(id) {
  const orderList = await orderlistRepository.getOrderlistById(id);
  if (!orderList) {
    throw new BadRequestError("id에 해당하는 주문내역리스트가 없습니다.");
  }
  return orderList;
}
async function updateOrderlist(orderList) {
  //userId 확인
  const userValidation = await userRespository.getUserById(userId);
  if (!userValidation) {
    throw new BadRequestError("id에 해당하는 유저가 없습니다.");
  }
  //id 확인
  const orderListValidation = await orderlistRepository.getOrderlistById(id);
  if (!orderListValidation) {
    throw new BadRequestError("id에 해당하는 주문내역리스트가 없습니다.");
  }

  orderList.ordersList = orderList.ordersList.join(",");
  await orderlistRepository.updateOrderlist(orderList);
}
async function deleteOrderlist(id) {
  //id 확인
  const orderListValidation = await orderlistRepository.getOrderlistById(id);
  if (!orderListValidation) {
    throw new BadRequestError("id에 해당하는 주문내역리스트가 없습니다.");
  }
  await orderlistRepository.deleteOrderlist(id);
}

module.exports = { createOrderlist, getOrderlists, getOrderlist, updateOrderlist, deleteOrderlist };
