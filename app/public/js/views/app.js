// https://gist.github.com/stephenvisser/2711454

var Content = Backbone.View.extend({
    initialize: function(options) {
	Backbone.history.on('route', function(source, path, params) {
	    this.render(path, params);
	}, this);
    },

    content: {
	"": { view: Home },
	"about": { view: About },
	"blog": { view: Blog },
	"default": { view: NotFound }
    },
    
    render: function(route, params) {
	    var view = this.content[route].cache || new this.content[route].view();
	    this.content[route].cache = view;
	    
	    var html =  (view).render(params).el;
	    this.$el.html(html);
    }
});

var Navbar = Backbone.View.extend({
    initialize: function(options) {
	Backbone.history.on('route', function(source, path) {
	    this.render(path);
	}, this);
    },

    titles: {
	"": "Home",
	"about":"About"
    },

    events: {
	'click a': function(source) {
	    var hrefRslt = source.target.getAttribute('href');
	    Backbone.history.navigate(hrefRslt, { trigger: true });
	    // Cancel the regular event handling so that we won't actual change URLs
	    // We are letting Backbone handle routing
	    return false;
	}
    },

    render: function(route) {
	this.$el.empty();
	var template = _.template("<li class='<%=active %>'><a href='<%=url%>'><%=visible%></a></li>");
	for (var key in this.titles)
	{
	    this.$el.append(template({url:key, visible:this.titles[key], active:route === key? 'active':''}));
	}
    }
});
