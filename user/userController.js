const { StatusCodes } = require("http-status-codes");
const UserService = require("./userService");

async function createUser(req, res, next) {
  const user = req.body;
  try {
    await UserService.createUser(user);
    return res.status(StatusCodes.OK).send({ message: "CREATED" });
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  const id = req.params.id;
  try {
    const user = await UserService.getUser(id);
    return res.status(StatusCodes.OK).send({ message: "OK", data: user });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const user = req.body;
  try {
    await UserService.updateUser(user);
    return res.status(StatusCodes.OK).send({ message: "UPDATED" });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const id = req.params.id;
  try {
    await UserService.deleteUser(id);
    return res.status(StatusCodes.OK).send({ message: "DELETED" });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { createUser, getUser, updateUser, deleteUser };
