
const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true },(e)=>{
    if(e){
        console.error('Ошибка подключения к базе данных',e)
    }else{
        console.log('База данных подключена')
    }
})

// .then(res=>{
//     console.log(res)
//     // const User = mongoose.model('Users', {login:String,password:String,role:String});

//     // const Ivan = new User({ login:"Ivan",password:"123",role:"Operator"});
    
//     // Ivan.save().then(() => console.log('create'));
// })
// .catch(e=>console.error("Ошибка подключения к базе данных",e))



exports.default = {}