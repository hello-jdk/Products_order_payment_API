const { BadRequestError } = require("../httpErrors");
const orderRepository = require("./orderRepository");
const userRepository = require("../user/userRepository");

async function createOrder(order) {
  await orderRepository.createOrder(order);
}

async function getOrder(id) {
  const order = await orderRepository.getOrderById(id);
  if (!order) {
    throw new BadRequestError("id에 해당하는 주문이 없습니다.");
  }
  return order;
}

async function getOrders(userId) {
  const user = await userRepository.getUserById(userId);
  if (!user) {
    throw new BadRequestError("id에 해당하는 유저가 없습니다.");
  }

  const orderList = await orderRepository.getOrderListByUserId(userId);
  return orderList;
}

async function updateOrder(order) {
  const updatedOrderCount = await orderRepository.updateOrder(order);
  if (updatedOrderCount != 1) {
    throw new BadRequestError("id에 해당하는 주문이 없습니다.");
  }
  return true;
}

async function deleteOrder(id) {
  const deletedOrderCount = await orderRepository.deleteOrderById(id);
  if (deletedOrderCount != 1) {
    throw new BadRequestError("id에 해당하는 주문이 없습니다.");
  }
  return true;
}

module.exports = { createOrder, getOrder, getOrders, updateOrder, deleteOrder };
