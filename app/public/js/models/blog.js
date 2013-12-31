var app = app || {};

app.Blog = Backbone.Model.extend({
    defaults: {
	title: 'Default Blog',
	body: 'Default Body',
	author: 'Unkown',
	slug: 'default',
    }
});
