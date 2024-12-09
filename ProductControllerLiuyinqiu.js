const mongoose = require("mongoose");
const ProductService = require("../services/ProductServiceLiuyinqiu");

const ProductController = {
  // 添加产品
  addProduct: async (req, res) => {
    try {
      const { name, description, price, quantity, category } = req.body;
      if (!name || !price || !quantity) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const newProduct = await ProductService.addProduct(name, description, price, quantity, category);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 更新产品
  updateProduct: async (req, res) => {
    try {
      const productId = req.params.productId;
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ error: "Invalid product ID" });
      }
      const { name, description, price, quantity, category } = req.body;
      if (!name && !description && !price && !quantity && !category) {
        return res.status(400).json({ error: "No fields to update" });
      }
      const updatedProduct = await ProductService.updateProduct(productId, name, description, price, quantity, category);
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 删除产品
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ error: "Invalid product ID" });
      }
      const deletedProduct = await ProductService.deleteProduct(productId);
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 获取产品列表
  getProducts: async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const products = await ProductService.getProducts(parseInt(page), parseInt(limit));
      const totalCount = await ProductService.getTotalCount();
      res.status(200).json({
        products,
        totalCount,
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalCount / limit),
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ProductController;
