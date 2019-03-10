var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var navbarRouter = require('./routes/navbar');
var updatelistingRouter = require('./routes/updatelisting');
var deletelistingRouter = require('./routes/deletelisting');
var addlistingRouter = require('./routes/addlisting');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/navbar', navbarRouter);
app.use('/updatelisting', updatelistingRouter);
app.use('/deletelisting', deletelistingRouter);
app.use('/addlisting', addlistingRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//
// var db = require('mysql');
// var dbCred = require('./db_creds.json');
// var connection = db.createConnection(dbCred);

// connection.connect(function(err){
//   if (err) throw err;
//   console.log('Connected..');
//   var sql = "INSERT INTO bar (barName, streetAddress, city, zipcode, phone, happyHour, awesome) VALUES ('myBar', '123 happy street', 'seattle', '65555', '789456123', 'happyHour', 'awesome')";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });



var db = require('mysql');
var dbCred = require('./db_creds.json');
var connection = db.createConnection(dbCred);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var port = process.env.PORT || 3001;
app.listen(port);

module.exports = app;
