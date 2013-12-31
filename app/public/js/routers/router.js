var Workspace = Backbone.Router.extend({
    routes: {
	"": "",
	"about": "about",
	"blog/:id": "blog",
	"*default": "default"
    }
});
