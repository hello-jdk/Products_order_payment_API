const paymentService = require("./paymentService");
const { StatusCodes } = require("http-status-codes");

async function createPayment(req, res, next) {
  const payment = req.body;
  try {
    await paymentService.createPayment(payment);
    return res.status(StatusCodes.OK).send({ message: "CREATED" });
  } catch (error) {
    next(error);
  }
}
async function getPayments(req, res, next) {
  const userId = req.params.userId;
  try {
    const paymentList = await paymentService.getPayments(userId);
    return res.status(StatusCodes.OK).send({ message: "OK", data: paymentList });
  } catch (error) {
    next(error);
  }
}
async function getPayment(req, res, next) {
  const id = req.params.id;
  try {
    const payment = await paymentService.getPayment(id);
    return res.status(StatusCodes.OK).send({ message: "OK", data: payment });
  } catch (error) {
    next(error);
  }
}
async function deletePayment(req, res, next) {
  const id = req.params.id;
  try {
    await paymentService.deletePayment(id);
    return res.status(StatusCodes.OK).send({ message: "DELETED" });
  } catch (error) {
    next(error);
  }
}

module.exports = { createPayment, getPayments, getPayment, deletePayment };
