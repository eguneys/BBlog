var Home = Backbone.View.extend({
    template: _.template($('#home-template').html()),

    events: {
	'click .previous': 'previous',
	'click .next': 'next'
    },
    
    initialize: function (params) {
	this.collection = new BlogList();

	this.collection.gotoPage(params[0] || 1);

	this.listenTo(this.collection, "add", this.renderBlog);
	this.listenTo(this.collection, "reset", this.render);
    },

    render: function () {
	this.$el.html(this.template({hasPrevious: this.collection.hasPrevious()}));

	this.collection.each(function(item) {
	    this.renderBlog(item);
	}, this);
	
	return this;
    },

    renderBlog: function(item) {
	this.$('#blog-list-container').append((new BlogPreView({ model: item })).render().el);
    },

    next: function (e){
	e.preventDefault();
	this.collection.next();
	this.syncUrl();
    },

    previous: function(e) {
	e.preventDefault();
	this.collection.previous();
	this.syncUrl();
    },

    syncUrl: function () {
	AppRouter.navigate('/page/' + this.collection.currentPage);
    }
    
});


var About = Backbone.View.extend({

    template: _.template($('#about-template').html()),
    
    initialize: function () {
	
    },

    render: function () {
	this.$el.html(this.template());
	return this;
    }
});


var NotFound = Backbone.View.extend({

    template: _.template($('#404-template').html()),
    
    initialize: function () {
	
    },

    render: function () {
	this.$el.html(this.template());
	return this;    }
});
