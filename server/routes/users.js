
var express = require('express');
var router = express.Router();
var User = require('../model/Users');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/getusersbyid', async function (req, res, next) {
  const { id } = req.body
  console.log(id)
  var Iniciators = Promise.all(id.map(async (id) => {
    const Iniciator = await User.findById({ "_id": id })
    .then(result=>{
     if(result!=null){
       return result;
     }
     else{
      return result = ""
     }
    })
    return Iniciator; 
  }))

console.log(Object.values(await Iniciators) )

  res.status(201).send(await Iniciators);


});


module.exports = router;
