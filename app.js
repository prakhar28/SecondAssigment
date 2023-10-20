var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

const listController = require('./routes/listController');
const createController = require('./routes/createController');
const viewController = require('./routes/viewController');
const editController = require('./routes/editController');
const deleteController = require('./routes/deleteController');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set up the controllers as middleware
app.use('/', listController);
app.use('/', createController);
app.use('/', viewController);
app.use('/', editController);
app.use('/', deleteController);

app.get('/', function(req, res, next) {
  res.redirect('/documents')
});

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

module.exports = app;
