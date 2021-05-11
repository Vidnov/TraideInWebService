var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
// var fetch = require('fetch');
const key = "dlxgqDvyjG7BBWfsh8xnJAklJuiH";

/* GET home page. */


router.get('/', function (req, res, next) {
  console.log('ok')

  res.send('ok')
});
router.post('/', function (req, res, next) {
  
  const{name,phone,code,date}=JSON.parse(req.body.data)
  phone.replace(/\s+/g, '').trim();
  console.log(phone)
  const urlApi =`http://n.vidnov@sotiks.net:${key}@gate.smsaero.ru/v2/sms/send?numbers[]=79997302315&text=Code+Verificate:+${code}&sign=SMS Aero`;
  console.log(urlApi)
  getApi(urlApi);


  res.send('ok')

});

var getApi = (url) => {
  fetch(url,{
    headers: { 
      'Content-Type': 'application/json',
   }
  })
    .then(res => {
      console.log(res);
      
    })
    .catch(e => {
      console.error(e);
    })

}
module.exports = router;
