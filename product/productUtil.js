const authValidation = (authority) => {
  const admin = 1;
  const user = 2;

  return authority == admin ? true : false;
};

module.exports = { authValidation };
