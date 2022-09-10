const { userModel } = require("../models/index");
const { ConflictError, NotFoundError } = require("../httpErrors");

async function createUser(user) {
  try {
    const newUser = await userModel.create(user, { raw: true });
    return newUser;
  } catch (error) {
    if (error.name == "SequelizeUniqueConstraintError") {
      throw new ConflictError("이미 가입한 유저이름입니다.");
    } else {
      throw new Error("createUser 에러");
    }
  }
}

async function getUserById(id) {
  try {
    const User = await userModel.findByPk(id, { attributes: ["id", "name", "grade"], raw: true });
    return User;
  } catch (error) {
    throw new Error("getuserById 에러");
  }
}

async function updateUser(user) {
  try {
    const updatedUser = await userModel.update(user, { where: { id: user.id } });
    return updatedUser;
  } catch (error) {
    throw new Error("updateUser 에러");
  }
}

async function deleteUserByid(id) {
  try {
    const deletedUser = await userModel.destroy({ where: { id } });
    return deletedUser;
  } catch (error) {
    throw new Error("deleteUserByid 에러");
  }
}

module.exports = { createUser, getUserById, updateUser, deleteUserByid };
