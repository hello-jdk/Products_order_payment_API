const router = require("express").Router();
const productController = require("./productController");
const productMiddleware = require("./productMiddleware");

router.post("/", productMiddleware.isValid, productController.createProduct);
router.get("/:id", productController.getProduct);
router.put("/", productMiddleware.isValid, productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
