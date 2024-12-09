const mongoose = require("mongoose");

// 配置 strictQuery 选项以避免警告
mongoose.set('strictQuery', true);

// 连接到 MongoDB 数据库 Liuyinqiu_A2
mongoose.connect("mongodb://127.0.0.1:27017/Liuyinqiu_A2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose;
