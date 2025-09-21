const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../controllers/productsController");

// Lấy danh sách sản phẩm
router.get("/", getProducts);

// Thêm sản phẩm
router.post("/", addProduct);

module.exports = router;
