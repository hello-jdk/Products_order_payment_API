const { statusCodes } = require("http-status-codes");
const UserService = require("./userService");

async function createUser(req, res) {
  const user = req.body;
  try {
    await UserService.createUser(user);
    return res.statusCodes(statusCodes.CREATED).send({ message: "CREATED" });
  } catch (error) {
    console.error(error.message);
    return res.status(statusCodes.INTERNAL_SERVER_ERROR).send({ message: "ERROR" });
  }
}

module.exports = { createUser };
