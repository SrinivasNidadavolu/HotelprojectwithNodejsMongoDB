var express = require('express'),
    items = require('./routes/hotel');
 
var app = express();
app.get('/hoteldata', items.findAll);
app.listen(3000);
console.log('Listening on port 3000...');