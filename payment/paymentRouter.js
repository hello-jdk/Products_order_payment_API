const router = require("express").Router();
const paymentController = require("./paymentController");

//TODO: 유효성 검사

router.post("/", paymentController.createPayment);
router.get("/list/:userId", paymentController.getPayments);
router.get("/:id", paymentController.getPayment);
router.delete("/:id", paymentController.deletePayment);

module.exports = router;
