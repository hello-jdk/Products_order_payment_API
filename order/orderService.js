const { BadRequestError } = require("../httpErrors");
const orderRepository = require("./orderRepository");

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
async function updateOrder(order) {
  const updatedorderCount = await orderRepository.updateOrder(order);
  if (updatedorderCount != 1) {
    throw new BadRequestError("id에 해당하는 주문이 없습니다.");
  }
  return true;
}
async function deleteOrder(id) {
  const deletedorderCount = await orderRepository.deleteOrderById(id);
  if (deletedorderCount != 1) {
    throw new BadRequestError("id에 해당하는 주문이 없습니다.");
  }
  return true;
}

module.exports = { createOrder, getOrder, updateOrder, deleteOrder };
