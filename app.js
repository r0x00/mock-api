var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routesViews = require('./routes/routes-views')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', routesViews);

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

app.listen(5000, (err) => {
  if(err) return console.log('An err ocorrued when opening port 5000')
  console.log('Listening the app on port 5000')
  console.log(' ');
  console.log('= /api/name: return a name (bob, master, sheng fui) (change ever 30 seconds)');
  console.log("= /api/empty: return a {}  or { data: {'Hola:)'}} (change ever 60 seconds)");
  console.log('= /api/number: return a number between 1 at 6 (change ever 15 seconds)');
  console.log('= /api/boolean: return a boolean (change ever 45 seconds)');
  console.log(' ');

})

module.exports = app;
