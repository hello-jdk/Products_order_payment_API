const router = require("express").Router();

const userController = require("./userController");

router.post("/", userController);

module.exports = router;
