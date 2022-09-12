const orderlistService = require("./orderlistService");
const { StatusCodes } = require("http-status-codes");

async function createOrderlist(req, res, next) {
  const orderList = req.body;
  try {
    await orderlistService.createOrderlist(orderList);
    return res.status(StatusCodes.OK).send({ message: "CREATED" });
  } catch (error) {
    next(error);
  }
}
async function getOrderlists(req, res, next) {
  const userId = req.params.userId;
  try {
    const orderLists = await orderlistService.getOrderlists(userId);
    return res.status(StatusCodes.OK).send({ message: "OK", data: orderLists });
  } catch (error) {
    next(error);
  }
}
async function getOrderlist(req, res, next) {
  const id = req.params.id;
  try {
    const orderList = await orderlistService.getOrderlist(id);
    return res.status(StatusCodes.OK).send({ message: "OK", data: orderList });
  } catch (error) {
    next(error);
  }
}
async function updateOrderlist(req, res, next) {
  const orderList = req.body;
  try {
    await orderlistService.updateOrderlist(orderList);
    return res.status(StatusCodes.OK).send({ message: "UPDATED" });
  } catch (error) {
    next(error);
  }
}
async function deleteOrderlist(req, res, next) {
  const id = req.params.id;
  try {
    await orderlistService.deleteOrderlist(id);
    return res.status(StatusCodes.OK).send({ message: "DELETED" });
  } catch (error) {
    next(error);
  }
}

module.exports = { createOrderlist, getOrderlists, getOrderlist, updateOrderlist, deleteOrderlist };
