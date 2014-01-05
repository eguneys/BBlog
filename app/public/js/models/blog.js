var Blog = Backbone.Model.extend({
    urlRoot: '/api/journals',
    defaults: {
	title: "default title",
	body: "default body",
	author: { },
	date: Date.now(),
	paper: {},
	votes: {
	    up: 1,
	    down: 0
	},
	_id: -1
    }
});

var Paper = Backbone.Model.extend({

});

var PaperList = Backbone.Collection.extend({
    model: Paper,
    url: '/api/journals/papers'
});

