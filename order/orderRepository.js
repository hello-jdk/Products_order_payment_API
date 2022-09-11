const { BadRequestError } = require("../httpErrors");
const { orderModel } = require("../models/index");

async function createOrder(order) {
  try {
    const createdOrder = await orderModel.create(order);
    return createdOrder;
  } catch (error) {
    if (error.name == "SequelizeForeignKeyConstraintError") {
      throw new BadRequestError("유저id와 상품id를 확인해주세요.");
    } else {
      throw new Error("createOrder 에러");
    }
  }
}
async function getOrderById(id) {
  try {
    const order = await orderModel.findByPk(id, { raw: true });
    return order;
  } catch (error) {
    throw new Error("getOrderById 에러");
  }
}
async function updateOrder(order) {
  try {
    const updatedOrderCount = await orderModel.update(order, { where: { id: order.id } });
    return updatedOrderCount;
  } catch (error) {
    throw new Error("updateOrder 에러");
  }
}
async function deleteOrderById(id) {
  try {
    const deletedOrderCount = await orderModel.destroy({ where: { id } });
    return deletedOrderCount;
  } catch (error) {
    throw new Error("deleteOrderById 에러");
  }
}

module.exports = { createOrder, getOrderById, updateOrder, deleteOrderById };
