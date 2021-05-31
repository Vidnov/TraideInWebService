var express = require('express');
var router = express.Router();
const TypeDevice = require('../model/TypeDevice');

var router = express.Router();

/* GET home page. */


router.get('/getTypeDevice', function (req, res, next) {
    TypeDevice.find({})
        .then(result => {
            console.log(result)
            if (result.length != 0) {
                console.log(result)
                res.status(201).send(result)
            } else {
                console.log("Список Устройств не отобразился")
                res.status(200).send("Список Устройств не отобразился")
            }

        })

})
module.exports = router;
