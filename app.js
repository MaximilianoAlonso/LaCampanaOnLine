const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const localUserCheck = require("./middlewares/localUserCheck");
const cookieCheck = require("./middlewares/cookieCheck");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')))
    .use(methodOverride('_method'))
    .use(session({
      secret : "forSale",
      resave: false,
      saveUninitialized: true
    }))
    .use(cookieCheck) //cargo en session lo que hay en la cookie
    .use(localUserCheck) //cargo en locals lo que hay en session
    .use((req, res, next) => {
      req.session.message = null;
      next();
    })
    
    .use('/', indexRouter)
    .use('/users', usersRouter)
    .use("/posts", postsRouter);

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
