const { userModel } = require("../models/index");

async function createUser(user) {
  try {
    const newUser = await userModel.create(user, { raw: true });
    return newUser;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { createUser };
