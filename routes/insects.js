var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('insects', { title: 'Insects Search Results' });
});

module.exports = router;