var express = require('express');
var router = express.Router();
var insect_controller = require('../controllers/insect');

/* GET Insect detail page. */
router.get('/update', insect_controller.insect_update_Page);


module.exports = router;