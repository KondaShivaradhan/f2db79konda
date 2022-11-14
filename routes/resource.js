var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var insect_controller = require('../controllers/insect');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Insect.
router.post('/insects', insect_controller.insect_create_post);
// DELETE request to delete Insect.
router.delete('/insects/:id', insect_controller.insect_delete);
// PUT request to update Insect.
router.put('/insects/:id', insect_controller.insect_update_put);
// GET request for one Insect.
router.get('/insects/:id', insect_controller.insect_detail);
// GET request for list of all Insect items.
router.get('/insects', insect_controller.insect_list);
module.exports = router;