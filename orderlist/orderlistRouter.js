const router = require("express").Router();
const orderlistController = require("./orderlistController");

router.post("/", orderlistController.createOrderlist);
router.get("/list/:userId", orderlistController.getOrderlists);
router.get("/:id", orderlistController.getOrderlist);
router.put("/", orderlistController.updateOrderlist);
router.delete("/:id", orderlistController.deleteOrderlist);

module.exports = router;
