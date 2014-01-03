var Blog = Backbone.Model.extend({
    defaults: {
	title: "default title",
	body: "default body",
	author: { },
	date: Date.now()
    }
});
