var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/product');
var offersRouter = require('./routes/offer');
var categorysRouter = require('./routes/category');
var productreviewsRouter = require('./routes/productreview');
var wishlistRouter = require('./routes/wishlist');
var orderRouter = require('./routes/order');
var inventoryRouter = require('./routes/inventory');
var applicationRouter = require('./routes/application')
var cartRouter = require('./routes/cart');
var employeeRouter = require('./routes/employee');
var salaryRouter = require('./routes/salary');
var deliveryRouter = require('./routes/delivery');

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
app.use('/user', usersRouter);
app.use('/product', productsRouter);
app.use('/offer', offersRouter);
app.use('/category', categorysRouter);
app.use('/productreview', productreviewsRouter);
app.use('/wishlist', wishlistRouter);
app.use('/order', orderRouter);
app.use('/inventory', inventoryRouter);
app.use('/application', applicationRouter);
app.use('/cart', cartRouter);
app.use('/employee', employeeRouter);
app.use('/salary', salaryRouter);
app.use('/delivery', deliveryRouter);
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
