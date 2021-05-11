var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/Users');
const jwt = require('jsonwebtoken');
const config = require('../config');
const loginMessageFalse = "Логин или пароль не верный"
const loginMessageTrue = "Пользователь найден"


/* GET users listing. */
router.post('/', function (req, res, next) {
    const { Login, Password } = req.body
    User.findOne({ Login }, (err, user) => {
        if (user) {
            const passwordResult = bcrypt.compare(Password, user.Password)

            passwordResult.then(result => {

                if (result) {
                    const token = jwt.sign(
                        {
                            Login: user.Login,
                            Password: user.Password
                        },
                        config.secretKey,
                        {
                            expiresIn: 60 * 60
                        }
                    )

                    autorization = { msg: loginMessageTrue, token: token, user: user }
                    res.status(201).send(autorization)
                    console.log('Авторизирован')
                }
                else {
                    res.status(200).send(loginMessageFalse)
                    console.log('нет')
                }
            })
        }
        else {
            res.status(200).send(loginMessageFalse)
            console.log('нет')
        }

    })
});

module.exports = router;
