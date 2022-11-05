var express = require('express');
const insect_controlers = require('../controllers/insect');
var router = express.Router();

/* GET home page. */
router.get('/', insect_controlers.insect_view_all_Page);

// router.get('/', function(req, res, next) {
//     res.render('insects', { title: 'Insects Search Results' });

// });

module.exports = router;