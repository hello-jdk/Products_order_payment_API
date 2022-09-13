const router = require("express").Router();

const userController = require("./userController");
const userMiddleWare = require("./userMiddleware");

router.post("/", userMiddleWare.isValid, userController.createUser);
router.get("/:id", userController.getUser);
router.patch("/", userMiddleWare.isValid, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
