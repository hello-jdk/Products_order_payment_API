const { expressInit } = require("./app");

expressInit().catch((e) => {
  console.error("Internal Server Error");
  console.error(e.message);
});
