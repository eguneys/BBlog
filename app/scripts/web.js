var express = require('express');
var path = require('path');
var baucis = require('baucis');


var routes = require('./routes.js');
var schemas = require('./schemas.js');

var app = express();

app.configure(function() {
    app.use(express.static(path.join(__dirname, '../public')));
    app.use('/api', baucis());
    app.use(routes.index);
});


var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(' - listening on ' + port);
});
