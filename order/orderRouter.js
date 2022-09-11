const router = require("express").Router();
const orderController = require("./orderController");

//TODO: 유효성 검사

router.post("/", orderController.createOrder);
router.get("/:id", orderController.getOrder);
router.put("/", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
