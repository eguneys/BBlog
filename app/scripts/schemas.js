var mongoose = require('mongoose');
var baucis = require('baucis');

var Blog = new mongoose.Schema({
    title: String,
    body: String,
    author: String
});



var journalSchema = mongoose.Schema({
    paper: {name: String, url: String},
    author: {name: String, photo: String },
    title: String,
    body: String,
    date: { type: Date, default: Date.now},
    meta: {
        votes: Number,
        favs: Number,
        tags: { type: String, lowercase: true, trim: true }
    }
});


var Journal = mongoose.model('journal', journalSchema);


var MONGO_URI = process.env.MONGOHQ_URI || 'mongodb://localhost/test';

mongoose.connect(MONGO_URI);

mongoose.model('blog', Blog);

mongoose.model('journal', journalSchema);


baucis.rest('blog');

var controller = baucis.rest('journal');

controller.get('/papers', function(request, response, next) {
    Journal.distinct('paper.name', function(err, result) {
	result = result.map(function (item) {
	    return { name: item }
	});

	response.send(result);
    });
});
