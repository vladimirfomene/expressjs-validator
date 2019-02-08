const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

//{subjects:["Networks", "Compiler", "Machine Learning", "Operating Systems"]}
module.exports = router;
