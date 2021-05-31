const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Phones = new Schema({
    Model: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    Price: {
        type: Object,
        required: true,
        min: 1,
        max: 100
    },
    Id: {
        type: String,
        required: false
    },
    Age: {
        type: Number,
        required: false
    },
    Company: {
        type: String,
        required: false,
    },
    OS: {
        type: String,
        required: false
    },
    TypeDevice:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Phones", Phones);