var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var phoneRouter = require('./routes/phone');
var retailRouter = require('./routes/retail');
var deviceRouter = require('./routes/device');
var requestRouter = require('./routes/request')
var registratorRouter = require('./routes/registrator');
var bodyParser = require('body-parser');
var DB= require('./database');


var app = express();

var corsOptions ={
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:8080']
}
// view engine setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('uploads'));




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/registrator', registratorRouter);
app.use('/phone', phoneRouter);
app.use('/retail', retailRouter);
app.use('/device', deviceRouter);
app.use('/request', requestRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

module.exports = app;
