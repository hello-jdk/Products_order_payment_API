const router = require("express").Router();

const userController = require("./userController");

//TODO : 유효성 검사

router.post("/", userController.createUser);
router.get("/:id", userController.getUser);
router.patch("/", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
