var express = require('express');
var path = require('path');
var jade = require('jade');

var routes = require('./routes.js');

var app = express();

app.configure(function() {
    app.set('views', __dirname + '/views')
    app.set('view engine', 'jade');
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(routes.index);
});


var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(' - listening on ' + port);
});
