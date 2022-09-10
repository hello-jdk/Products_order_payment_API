const { userModel } = require("../models/index");
const { ConflictError } = require("../httpErrors");

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
    const updatedUserConunt = await userModel.update(user, { where: { id: user.id } });
    return updatedUserConunt;
  } catch (error) {
    throw new Error("updateUser 에러");
  }
}

async function deleteUserByid(id) {
  try {
    const deletedUserCount = await userModel.destroy({ where: { id } });
    return deletedUserCount;
  } catch (error) {
    throw new Error("deleteUserByid 에러");
  }
}

module.exports = { createUser, getUserById, updateUser, deleteUserByid };
