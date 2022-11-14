var express = require('express');
var router = express.Router();
var insect_controller = require('../controllers/insect');

/* GET Insect detail page. */
router.get('/detail', insect_controller.insect_view_one_Page);


module.exports = router;