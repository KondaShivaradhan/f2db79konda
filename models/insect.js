const mongoose = require("mongoose")
const insectSchema = mongoose.Schema({
    insect_Name: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "Name of the Insect is not valid"]
    },
    insect_loc: {
        type: String,
        required: true,
        minLength: [0, "Location of the Insect is not valid"]
    },
    insect_variants: {
        type: Number,
        required: true,
        min: [0, "Variants of the Insect is not valid"]
    },
})
module.exports = mongoose.model("Insect",
    insectSchema)