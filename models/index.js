const Sequelize = require("sequelize");
const { DB } = require("../config/config");

const sequelize = new Sequelize(DB.DATABASE, DB.USERNAME, DB.PASSWORD, {
  host: DB.HOST,
  dialect: "mysql",
  logging: false,
});

//테이블 데이터 정의
const defineUserModel = require("./userModel");
const defineProductModel = require("./productModel");
const defineOrderModel = require("./orderModel");
const definePaymentModel = require("./paymentModel");

const userModel = defineUserModel(sequelize);
const productModel = defineProductModel(sequelize);
const orderModel = defineOrderModel(sequelize);
const paymentModel = definePaymentModel(sequelize);

module.exports = {
  sequelize,
  userModel,
  productModel,
  orderModel,
  paymentModel,
};
