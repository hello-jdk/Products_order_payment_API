const userRepository = require("./userRepository");
const { BadRequestError } = require("../httpErrors");

async function createUser(user) {
  await userRepository.createUser(user);
}

async function getUser(id) {
  const user = await userRepository.getUserById(id);
  if (!user) {
    throw new BadRequestError("id에 해당하는 유저가 없습니다.");
  }
  return user;
}

async function updateUser(user) {
  const updatedUserConunt = await userRepository.updateUser(user);
  if (updatedUserConunt != 1) {
    throw new BadRequestError("id에 해당하는 유저가 없습니다.");
  }
  return true;
}

async function deleteUser(id) {
  const deletedUserCount = await userRepository.deleteUserByid(id);
  if (deletedUserCount != 1) {
    throw new BadRequestError("id에 해당하는 유저가 없습니다.");
  }
  return true;
}

module.exports = { createUser, getUser, updateUser, deleteUser };
