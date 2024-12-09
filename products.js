const express = require('express');
const ProductController = require('../controllers/ProductControllerLiuyinqiu');
const router = express.Router();

// 增加产品
router.post("/", ProductController.addProduct);

// 更新产品
router.put("/:productId", ProductController.updateProduct);

// 删除产品
router.delete("/:id", ProductController.deleteProduct);

// 获取产品列表
router.get("/", ProductController.getProducts);

module.exports = router;
