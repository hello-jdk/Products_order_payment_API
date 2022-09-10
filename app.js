const { PORT } = require("./config/config");

const express = require("express");
const logger = require("morgan");
const { errorLogger, errorResponser } = require("./httpErrors");

const userRouter = require("./user/userRouter");

// TODO : swagger 작성
//const swaggerUi = require("swagger-ui-express");
//const YAML = require("yamljs");
//const swaggerDocument = YAML.load("./swagger/swagger.yaml");

/**
 * 웹 서비스에 사용할 DataBase 설정
 */
function databaseConnection() {
  const { sequelize } = require("./models");

  sequelize.sync({ force: true }).catch((error) => {
    console.error(error);
  });
}

/**
 * 웹 서비스에 사용할 middleware 설정
 * @param {express.Application} app
 * @returns {express.Application}
 */
function middlewareLoader(app) {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  return app;
}

/**
 * 웹 서비스의 error handler 설정
 */
function errorHandler(app) {
  app.use(errorLogger);
  app.use(errorResponser);

  return app;
}

/**
 * 웹 서비스의 API Routers 등록
 * @param {express.Application} app
 * @returns {express.Application}
 */

function routersRegister(app) {
  app.use("/api/users", userRouter);

  //app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  return app;
}

/**
 * express 서비스 생성
 */
async function expressInit() {
  const app = express();

  databaseConnection();
  middlewareLoader(app);
  routersRegister(app);
  errorHandler(app);

  return app.listen(PORT, () => {
    console.log("Running server on " + PORT);
  });
}

module.exports = {
  expressInit,
};
