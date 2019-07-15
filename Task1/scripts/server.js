var express = require('express');
var path = require('path');
var events = require('./eventsController');
var bodyParser = require('body-parser');

var app= express();
var rootpath= path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(rootpath+'/app'));
app.get('/data/event/:id',events.get);
app.post('/data/event/:id',events.save);

app.listen(8000);
console.log("Listening");