const userRepository = require("./userRepository");

async function createUser(user) {
  await userRepository.createUser(user);
}

async function getUser(id) {
  const user = await userRepository.getUserById(id);
  if (!user) {
    //TODO :해당하는 id의 유저가 없습니다. 에러처리
  }
  return user;
}

module.exports = { createUser, getUser };
