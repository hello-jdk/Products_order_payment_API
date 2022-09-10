const Sequelize = require("sequelize");
const { DB } = require("../config/config");

const sequelize = new Sequelize(DB.DATABASE, DB.USERNAME, DB.PASSWORD, {
  host: DB.HOST,
  dialect: "mysql",
  logging: false,
});

// TODO : 테이블 데이터 정의
//const definePostModel = require("./postModel");
//const postModel = definePostModel(sequelize);

module.exports = {
  sequelize,
};
