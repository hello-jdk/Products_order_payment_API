const { StatusCodes } = require("http-status-codes");
const UserService = require("./userService");

async function createUser(req, res, next) {
  const user = req.body;
  try {
    await UserService.createUser(user);
    return res.status(StatusCodes.CREATED).send({ message: "CREATED" });
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  const id = req.params.id;
  try {
    const User = await UserService.getUser(id);
    return res.status(StatusCodes.OK).send({ message: "OK", data: User });
  } catch (error) {
    next(error);
  }
}

module.exports = { createUser, getUser };
