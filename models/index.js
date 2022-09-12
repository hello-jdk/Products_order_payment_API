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
const defineOrderListModel = require("./orderListModel");
const definePaymentModel = require("./paymentModel");

const userModel = defineUserModel(sequelize);
const productModel = defineProductModel(sequelize);
const orderModel = defineOrderModel(sequelize);
const orderListModel = defineOrderListModel(sequelize);
const paymentModel = definePaymentModel(sequelize);

//테이블 관계성 정의
Object.values(sequelize.models).forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

module.exports = {
  sequelize,
  userModel,
  productModel,
  orderModel,
  orderListModel,
  paymentModel,
};
