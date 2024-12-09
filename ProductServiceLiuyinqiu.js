const ProductModel = require("../model/ProductModelLiuyinqiu");

const ProductService = {
  // 添加产品
  addProduct: (name, description, price, quantity, category) => {
    return ProductModel.create({ name, description, price, quantity, category });
  },

  // 更新产品
  updateProduct: async (id, name, description, price, quantity, category) => {
    if (!id) throw new Error("Product ID is required");
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      { name, description, price, quantity, category },
      { new: true } // 返回更新后的文档
    );
    if (!updatedProduct) throw new Error("Product not found");
    return updatedProduct;
  },

  // 删除产品
  deleteProduct: async (id) => {
    if (!id) throw new Error("Product ID is required");
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) throw new Error("Product not found");
    return deletedProduct;
  },

  // 获取产品列表（支持分页）
  getProducts: async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const products = await ProductModel.find().skip(skip).limit(limit);
    return products;
  },

  // 获取产品总数
  getTotalCount: async () => {
    const count = await ProductModel.countDocuments();
    return count;
  },
};

module.exports = ProductService;
