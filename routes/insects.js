var express = require('express');
const insect_controlers = require('../controllers/insect');
var router = express.Router();
const secured = (req, res, next) => {
        if (req.user) {
            return next();
        }
        req.session.returnTo = req.originalUrl;
        console.log(req.session.returnTo);
        res.redirect("/login");
    }
    /* GET home page. */
router.get('/', insect_controlers.insect_view_all_Page);
router.get('/update', secured, insect_controlers.insect_update_Page);
router.get('/detail', secured, insect_controlers.insect_delete_Page);
router.get('/create', secured, insect_controlers.insect_create_Page);
router.get('/delete', secured, insect_controlers.insect_delete_Page);

module.exports = router;