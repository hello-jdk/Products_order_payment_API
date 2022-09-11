const router = require("express").Router();
const productController = require("./productController");

router.post("/", productController.createProduct);
router.get("/:id", productController.getProduct);

module.exports = router;
