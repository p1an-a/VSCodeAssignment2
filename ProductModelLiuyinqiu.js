const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 定义产品的 Schema
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "产品名称不能为空"], // 必填字段
      trim: true, // 去除前后空格
    },
    description: {
      type: String,
      default: "暂无描述", // 默认值
    },
    price: {
      type: Number,
      required: [true, "价格不能为空"], // 必填字段
      min: [0, "价格不能为负数"], // 最小值限制
    },
    quantity: {
      type: Number,
      required: [true, "库存数量不能为空"], // 必填字段
      min: [0, "库存数量不能为负数"], // 最小值限制
      default: 0, // 默认库存为 0
    },
    category: {
      type: String,
      required: [true, "分类不能为空"], // 必填字段
      enum: ["电子产品", "服装", "食品", "书籍", "其他"], // 限制取值范围
      default: "其他",
    },
  },
  {
    timestamps: true, // 启用创建时间和更新时间
  }
);

// 创建产品模型
const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
