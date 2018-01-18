const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const env = process.env.NODE_ENV || 'development';
if(env === 'test'){
    process.env.PORT = 3005;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/Inventory_management_Test';
} else if(env === 'development' || env === 'production'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/Inventory_management';
}
console.log(process.env.MY_APP);
mongoose.connect(process.env.MONGODB_URI);
// routes
const routes = require('./routes/index');
const product = require('./routes/product');
const location = require('./routes/location');
const category = require('./routes/category');
const dashboard = require('./routes/dashboard');
const subCategory = require('./routes/subCategory');

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
app.use('/', category);
app.use('/', subCategory);
app.listen(process.env.PORT,() => {
    console.log(`Application started on port ${process.env.PORT}` );
});

module.exports={app};