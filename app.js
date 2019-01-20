const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Mount routers
app.use('/', indexRouter);

app.listen(port, () => console.log(`Expressjs-Validator listening on port ${port}!`))

module.exports = app;
