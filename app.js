var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString =
    process.env.MONGO_CON
console.log("here is URI : " + connectionString);
mongoose = require('mongoose');
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once("open", function() {
    console.log("Connection to DB succeeded")
});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var insectsRouter = require('./routes/insects');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
// modals
var Insect = require("./models/insect");

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
app.use('/insects', insectsRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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
// seed
async function recreateDB() {
    // Delete everything
    await Insect.deleteMany();
    let instance1 = new
    Insect({
        insect_Name: "bat",
        insect_loc: 'Africa',
        insect_variants: 22
    });
    let instance2 = new
    Insect({
        insect_Name: "beetle",
        insect_loc: 'gaana',
        insect_variants: 24
    });
    let instance3 = new
    Insect({
        insect_Name: "snail",
        insect_loc: 'cuba',
        insect_variants: 78
    });
    instance1.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("First object saved")
    });
    instance2.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Secound object saved")
    });
    instance3.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Third object saved")
    });
}
let reseed = true;
if (reseed) { recreateDB(); }
module.exports = app;