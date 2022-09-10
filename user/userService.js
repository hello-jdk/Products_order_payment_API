const userRepository = require("./userRepository");
const { BadRequestError } = require("../httpErrors");

async function createUser(user) {
  await userRepository.createUser(user);
}

async function getUser(id) {
  const user = await userRepository.getUserById(id);
  if (!user) {
    throw new BadRequestError("해당하는 id의 유저를 찾을 수 없습니다.");
  }
  return user;
}

async function updateUser(user) {
  await userRepository.updateUser(user);
}

module.exports = { createUser, getUser, updateUser };
