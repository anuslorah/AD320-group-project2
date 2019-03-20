var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');
var cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var navbarRouter = require('./routes/navbar');
var addlistingRouter = require('./routes/addlisting');
var updatelistingRouter = require('./routes/updatelisting');
var updateRouter = require('./routes/update');
var deletelistingRouter = require('./routes/deletelisting');
var addlistingRouter = require('./routes/addlisting');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var deleteRouter = require('./routes/delete');


var app = express();


app.use(cookieSession({
    name: 'session',
    keys: ['user']
}));

app.use(function(req, res, next) {
        res.locals.user = req.session.user;
        next();
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
app.use('/update', updateRouter);
app.use('/addlisting', addlistingRouter);
app.use('/deletelisting', deletelistingRouter);
app.use('/addlisting', addlistingRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
// app.get('*', function (req, res) {
//         console.log(req.session);
//         res.send({ user : req.session});
// });

// app.use(function logout(req, res) {
//     res.clearCookie('connect.sid');
//     return res.sendStatus(200);
// });
app.use('/addlisting', addlistingRouter);
app.use('/delete', deleteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});



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