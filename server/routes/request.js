var express = require('express');
var router = express.Router();
var Requests = require('../model/Requests');
var Retails = require('../model/Retails');
const Users = require('../model/Users');
const Phones = require('../model/Phones');
/* GET users listing. */
router.post('/create', function (req, res, next) {
    const { Iniciator, Request } = req.body

    Requests.create({
        Iniciator: Iniciator,
        Client: Request.Name,
        PhoneClient: Request.PhoneClient,
        IMEI: Request.IMEI,
        DeviceId: Request.ModelDevice._id,
        Compensation: Request.Compensation,
        Retail: Request.Retail
    }).then(r => {
        console.log(req.body)
        res.send('ok')
    })



});
router.post('/getrequestsbyini', async function (req, res, next) {
    const { Iniciator } = req.body
    const Request = await Requests.find({
        Iniciator: Iniciator,
    })



    var Iniciators = Promise.all(Request.map(async element => {
        var Phone = await Phones.findById({ "_id": element.DeviceId })
        console.log(Phone)

        element.Device = Phone;
        return element;
    }))

    console.log(await Iniciators)

    res.status(201).send(await Request)
});


router.post('/getrequestsbyid', async function (req, res, next) {
    const { id } = req.body
    const Request = await Requests.find({
        "_id": id,
    })



    var RequestById = Promise.all(Request.map(async element => {
        var Phone = await Phones.findById({ "_id": element.DeviceId })
        console.log(Phone)

        element.Device = Phone;
        return element;
    }))

    console.log(await RequestById)

    res.status(201).send(await RequestById)
});

module.exports = router;
