var express = require('express');
const insect_controlers = require('../controllers/insect');
var router = express.Router();

/* GET home page. */
router.get('/', insect_controlers.insect_view_all_Page);


module.exports = router;