const { orderListModel } = require("../models/index");

async function createOrderlist(orderList) {
  try {
    await orderListModel.create(orderList, { raw: true });
  } catch (error) {
    throw new Error("createOrderlist 에러");
  }
}
async function getOrderlistsByUserId(userId) {
  try {
    const orderLists = await orderListModel.findAll({ where: { userId: userId } });
    return orderLists;
  } catch (error) {
    throw new Error("getOrderlistsByUserId 에러");
  }
}
async function getOrderlistById(id) {
  try {
    const orderList = await orderListModel.findOne({ where: { id } });
    return orderList;
  } catch (error) {
    throw new Error("getOrderlistById 에러");
  }
}
async function updateOrderlist(orderList) {
  try {
    const updatedOrderListCount = await orderListModel.update(orderList, {
      where: { id: orderList.id },
    });
    if (updatedOrderListCount != 1) {
      throw new Error();
    }
    return true;
  } catch (error) {
    throw new Error("updateOrderlist 에러");
  }
}
async function deleteOrderlist(id) {
  try {
    const deletedOrderListCount = await orderListModel.destroy({ where: { id } });
    if (deletedOrderListCount != 1) {
      throw new Error();
    }
    return true;
  } catch (error) {
    throw new Error("deleteOrderlist 에러");
  }
}

module.exports = {
  createOrderlist,
  getOrderlistsByUserId,
  getOrderlistById,
  updateOrderlist,
  deleteOrderlist,
};
