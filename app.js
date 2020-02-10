/*
1: imported express-handlebars as expressHbs and set view engine to use hbs

2: imported mongoose as mongoose and connected to database using mongoose.connect.  Default port for mongodb is 21017 so we will set the parameter
to loclahost:21017 and create a database for our products.
*/

const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const indexRouter = require('./routes/index');

const app = express();


mongoose.connect('mongodb://localhost:27017/estore6', {useNewUrlParser: true});


// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
