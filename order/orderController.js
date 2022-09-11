const orderService = require("./orderService");
const { StatusCodes } = require("http-status-codes");

async function createOrder(req, res, next) {
  const order = req.body;
  try {
    await orderService.createOrder(order);
    return res.status(StatusCodes.OK).send({ message: "CREATED" });
  } catch (error) {
    next(error);
  }
}

async function getOrder(req, res, next) {
  const id = req.params.id;
  try {
    const order = await orderService.getOrder(id);
    return res.status(StatusCodes.OK).send({ message: "OK", data: order });
  } catch (error) {
    next(error);
  }
}

async function getOrders(req, res, next) {
  const userId = req.params.userId;
  try {
    const orderList = await orderService.getOrders(userId);
    return res.status(StatusCodes.OK).send({ message: "OK", data: orderList });
  } catch (error) {
    next(error);
  }
}

async function updateOrder(req, res, next) {
  const order = req.body;
  try {
    await orderService.updateOrder(order);
    return res.status(StatusCodes.OK).send({ message: "UPDATED" });
  } catch (error) {
    next(error);
  }
}

async function deleteOrder(req, res, next) {
  const id = req.params.id;
  try {
    await orderService.deleteOrder(id);
    return res.status(StatusCodes.OK).send({ message: "DELETED" });
  } catch (error) {
    next(error);
  }
}

module.exports = { createOrder, getOrder, getOrders, updateOrder, deleteOrder };
