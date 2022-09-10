const Sequelize = require("sequelize");
const { DB } = require("../config/config");

const sequelize = new Sequelize(DB.DATABASE, DB.USERNAME, DB.PASSWORD, {
  host: DB.HOST,
  dialect: "mysql",
  logging: false,
});

// TODO : 테이블 데이터 정의
const defineUserModel = require("./userModel");
const defineProductModel = require("./productModel");

const userModel = defineUserModel(sequelize);
const productModel = defineProductModel(sequelize);

module.exports = {
  sequelize,
  userModel,
  productModel,
};
