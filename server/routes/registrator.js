var express = require('express');
var router = express.Router();
var User = require('../model/Users');
const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
/* GET users listing. */
router.post('/', function (req, res, next) {
    const { Login, Password, Role } = req.body
    User.findOne({ Login }, (err, user) => {
        if (user) {
            var data={}
            data.message='Такой пользователь уже зарегистрирован!'
            res.status(200).send(data);
            console.error('Такой пользователь уже зарегистрирован!')
        }
        else if (err) {
            console.error(err)
            res.status(200).send(err);
        }
        else if (!user) {
            var passwordToSave = bcrypt.hashSync(Password, salt)

            User.create({ Login: Login, Password: passwordToSave, Role: Role })
                .then(
                    r => {
                        if (r) {
                            res.status(201).send('Пользователь зарегистрирован!');
                            console.log('Пользователь зарегистрирован!')
                        }

                    }
                )
                .catch(e => {
                    if (e) {
                        var data={}
                        console.error(e);
                        data.message=`Проверьте поле <${e.errors.Role.path}> Информация для тех поддержки :`+e
                        res.send(data);
                    }

                });

        }
    })




});

module.exports = router;
