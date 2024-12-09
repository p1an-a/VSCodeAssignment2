var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 渲染产品管理页面
  res.render('index', { title: 'Product Management' });
});

module.exports = router;
