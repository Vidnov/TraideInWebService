const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Requests = new Schema({
    DataCreateRequest: {
        type: Date,
        required: true,
        default:()=>Date.now()
    },
    Rang: {
        type: String,
        required: false,
        min: 1,
        max: 100
    },
    Iniciator: {
        type: String,
        required: true
    },
    Client:{
        type:String
    },
    PhoneClient: {
        type: Number,
        required: false
    },
    DeviceId:{
        type:String,
        required:true
    },
    Device:{
        type:Object,
        default:{},
        required:true
    },
    IMEI:{
        type: Number,
        required: true
    },
    Compensation:{
        type:String,
        required:false
    },
    Retail:{
        type:String,
        required:true
    },
    Status:{
        type:Boolean,
        default:false
    }

});

module.exports = mongoose.model("Requests", Requests);