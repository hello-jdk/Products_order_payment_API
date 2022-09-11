const router = require("express").Router();
const productController = require("./productController");

router.post("/", productController.createProduct);

module.exports = router;
