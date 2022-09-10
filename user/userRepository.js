const { userModel } = require("../models/index");
const { ConflictError } = require("../httpErrors");

async function createUser(user) {
  try {
    const newUser = await userModel.create(user, { raw: true });
    return newUser;
  } catch (error) {
    throw new ConflictError("이미 가입한 유저이름입니다.");
  }
}

async function getUserById(id) {
  try {
    const User = await userModel.findByPk(id, { attributes: ["id", "name", "grade"], raw: true });
    return User;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { createUser, getUserById };
