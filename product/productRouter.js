const router = require("express").Router();
const productController = require("./productController");

//TODO: 유효성 검사

router.post("/", productController.createProduct);
router.get("/:id", productController.getProduct);
router.put("/", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
