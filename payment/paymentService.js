const paymentRepository = require("./paymentRepository");

const { BadRequestError } = require("../httpErrors");

async function createPayment(payment) {
  //TODO: userId, orderListId 확인
  await paymentRepository.createPayment(payment);
}
async function getPayments(userId) {
  const paymentList = await paymentRepository.getPaymentsByUserId(userId);
  return paymentList;
}
async function getPayment(id) {
  const payment = await paymentRepository.getPaymentById(id);
  if (!payment) {
    throw new BadRequestError("id에 해당하는 결제내용이 없습니다.");
  }
  return payment;
}
async function deletePayment(id) {
  await paymentRepository.deletePayment(id);
}

module.exports = { createPayment, getPayments, getPayment, deletePayment };
