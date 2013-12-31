var app = app || {};


app.BlogListView = Backbone.View.extend({

    events: {
	"click .previous": "previous",
	"click .next": "next"
    },
    

    renderBlog: function(item) {
	var blogView = new app.BlogShortView({
	    model: item
	});

	this.$('#blog-list-container').append(blogView.render().el);
    },

    render: function() {
	this.$('#blog-list-container').html('');
	this.collection.each(function(item) {
	    this.renderBlog(item);
	}, this);
    },

    previous: function(event) {
	event.preventDefault();

	this.collection.previous();
    },

    next: function(event) {
	event.preventDefault();

	this.collection.next();
    },


    initialize: function () {
	this.collection = this.model;
	this.collection.fetchPage();

	this.render();

	this.listenTo(this.collection, "reset", this.render);
    }
});

app.BlogShortView = Backbone.View.extend({
    tagName: 'div',

    template: _.template($('#blog-short-template').html()),

    events: {
	"click #read-more": "readMore"
    },

    render: function () {
	this.$el.html(this.template(this.model.toJSON()));
	return this;
    },

    readMore: function () {
	app.MyRouter.navigate("blog/" + this.model.get('_id'), { trigger: true });
    }
});

