var Content = Backbone.View.extend({
    initialize: function(options) {

	this.routes = options.routes;
	
	Backbone.history.on('route', function(source,path) {
	    this.render(path);
	}, this);
    },

    routes: {
    },

    render: function(route) {
	this.$el.html((new this.routes[route].view()).render().el);
    }
});


var Navbar = Backbone.View.extend({
    initialize: function(options) {
	this.routes = options.routes;
	
	Backbone.history.on('route', function(source, path) {
	    this.render(path);
	}, this);
    },

    events: {
	'click a': function(source) {
	    var hrefRslt = source.target.getAttribute('href');
	    Backbone.history.navigate(hrefRslt, {trigger: true});

	    // Cancel the regular event handing so that we won't actually
	    // change URLs We are letting Backbone handle routing
	    return false;
	}
    },

    render: function(route) {
	this.$el.empty();

	var template = _.template("<li class='<%=active%>'><a href='<%= url%>'><%=visible%></a></li>");
	for (var key in this.routes)
	{
	    if (!this.routes[key].hide)
		this.$el.append(template({url: this.routes[key].route, visible: key, active: route === key ? 'active': ''}));
	}
    }
});
