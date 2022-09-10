const userRepository = require("./userRepository");

async function createUser(user) {
  await userRepository.createUser(user);
}

module.exports = { createUser };
