var express = require('express');
var router = express.Router();
var Phones = require('../model/Phones')

/* GET users listing. */
router.post('/getphones', function (req, res, next) {
    Phones.find({}).then(r => {
        if (r) {
            res.status(201).send(r)
        } else {
            res.status(200).send('Ошибка загрузки списка')
        }
    }
    )

});

router.post('/getphonesbytype', function (req, res, next) {
    const { id } = req.body
    console.log(id)
    Phones.find({"TypeDevice":id}).then(r => {
        console.log(r)
        if (r) {
            res.status(201).send(r)
        } else {
            res.status(200).send('Ошибка загрузки списка')
        }
    }
    )

});

module.exports = router;