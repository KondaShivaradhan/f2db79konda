var express = require('express');
var router = express.Router();
var insect_controller = require('../controllers/insect');

/* GET Insect detail page. */
router.get('/delete', insect_controller.insect_delete_Page);


module.exports = router;