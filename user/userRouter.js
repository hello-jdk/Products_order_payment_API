const router = require("express").Router();

const userController = require("./userController");

router.post("/", userController.createUser);
router.get(":id", userController.getUser);

module.exports = router;
