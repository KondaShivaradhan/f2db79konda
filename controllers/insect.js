var Insect = require('../models/insect');
// List of all Insects
exports.insect_list = async function(req, res) {
    try {
        theInsects = await Insect.find();
        res.send(theInsects);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Insect.
exports.insect_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Insect.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Insect create on POST.
exports.insect_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Insect();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"insect_Name":"goat", "cost":12, "insect_variants":"large"}
    document.insect_Name = req.body.insect_Name;
    document.insect_variants = req.body.insect_variants;
    document.insect_loc = req.body.insect_loc;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Insect delete form on DELETE.
exports.insect_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Insect delete DELETE ' + req.params.id);
};
// Handle Insect update form on PUT.
exports.insect_update_put = async function(req, res) {
    console.log(req.params.id);
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Insect.findById(req.params.id)
        console.log(toUpdate);
        // Do updates of properties 
        if (req.body.insect_Name) {
            toUpdate.insect_Name = req.body.insect_Name;
            // toUpdate.insect_Name = req.body.insect_Name;
        }
        if (req.body.insect_loc) toUpdate.insect_loc = req.body.insect_loc;
        if (req.body.insect_variants) toUpdate.insect_variants = req.body.insect_variants;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
exports.insect_view_all_Page = async function(req, res) {
    try {
        theInsects = await Insect.find();
        res.render('insects', { title: 'Insect Search Results', results: theInsects });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};