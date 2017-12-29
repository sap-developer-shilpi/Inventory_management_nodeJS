const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Inventory_management');
// routes
const routes = require('./routes/index');
const product = require('./routes/product');
const location = require('./routes/location');
const dashboard = require('./routes/dashboard');

// app connect
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//view engine
app.set('views', './views');
app.engine('handlebars', hbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
// set static folder
app.use(express.static('./public'));
app.use('/', product);
app.use('/', routes);
app.use('/', location);
app.use('/', dashboard);

app.listen(3000,() => {
    console.log("Application started on port 3000");
});