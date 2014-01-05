var Home = Backbone.View.extend({
    template: _.template($('#home-template').html()),

    events: {
	'click .previous': 'previous',
	'click .next': 'next'
    },
    
    initialize: function (params) {
	this.collection = new BlogList();
	this.papers = new PaperList();

	this.papers.fetch();
	this.collection.gotoPage(params[0] || 1);

	this.listenTo(this.collection, "add", this.renderBlog);
	this.listenTo(this.collection, "reset", this.render);
	this.listenTo(this.papers, "add", this.renderPaper);
	this.listenTo(this.papers, "reset", this.render);
    },

    render: function () {
	this.$el.html(this.template({hasPrevious: this.collection.hasPrevious()}));


	this.papers.each(function(paper) {
	    this.renderPaper(paper);
	}, this);
	
	this.collection.each(function(item) {
	    this.renderBlog(item);
	}, this);

	$('abbr.timeago').timeago();
	
	return this;
    },

    renderPaper: function (paper) {
	var template = _.template("<li><a href='#'><%= name %></a></li>");
	this.$('#paper-list-container').append(template(paper.toJSON()));
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
