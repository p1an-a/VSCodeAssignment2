const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

// 获取分类列表
router.get("/", CategoryController.getCategories);

module.exports = router;
