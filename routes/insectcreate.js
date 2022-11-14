var express = require('express');
var router = express.Router();
var insect_controller = require('../controllers/insect');

/* GET Insect detail page. */
router.get('/create', insect_controller.insect_create_Page);


module.exports = router;