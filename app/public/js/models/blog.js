var Blog = Backbone.Model.extend({
    urlRoot: '/api/journals',
    defaults: {
	title: "default title",
	body: "default body",
	author: { },
	date: Date.now(),
	_id: -1
    }
});
