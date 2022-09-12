const { paymentModel } = require("../models/index");

async function createPayment(payment) {
  try {
    await paymentModel.create(payment, { raw: true });
  } catch (error) {
    console.log(error);
    throw new Error("createPayment 에러");
  }
}
async function getPaymentsByUserId(userId) {
  try {
    const paymentList = await paymentModel.findAll({ where: { userId: userId } });
    return paymentList;
  } catch (error) {
    throw new Error("getPaymentsByUserId 에러");
  }
}
async function getPaymentById(id) {
  try {
    const payment = await paymentModel.findByPk(id);
    return payment;
  } catch (error) {
    throw new Error("getPaymentById 에러");
  }
}
async function deletePayment(id) {
  try {
    await paymentModel.destroy({ where: { id } });
  } catch (error) {
    throw new Error("deletePayment 에러");
  }
}

module.exports = { createPayment, getPaymentsByUserId, getPaymentById, deletePayment };
