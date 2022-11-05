const mongoose = require("mongoose")
const insectSchema = mongoose.Schema({
    insect_Name: String,
    insect_loc: String,
    insect_variants: Number
})
module.exports = mongoose.model("Insect",
    insectSchema)