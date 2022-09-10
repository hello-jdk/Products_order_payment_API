const router = require("express").Router();

const userController = require("./userController");

router.post("/", userController.createUser);
router.get("/:id", userController.getUser);
router.patch("/", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
