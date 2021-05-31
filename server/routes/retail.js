var express = require('express');
var router = express.Router();
var Retails = require('../model/Retails')

/* GET users listing. */
router.post('/getretails', function (req, res, next) {
    Retails.find({}).then(r => {
        if (r) {
           
            res.status(201).send(r)
        }else{
            res.status(200).send('Ошибка загрузки списка')
        }
    }
    )

});

module.exports = router;