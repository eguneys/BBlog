var Home = Backbone.View.extend({
    template: _.template($('#home-template').html()),
    
    initialize: function(options) {

    },

    render: function() {
	this.$el.html(this.template());
	this.blogList =  new app.BlogListView({model: app.BlogListCollection, el: this.$("#blog-list-view")});
	return this;
    }
    
});

var About = Backbone.View.extend({
    template: _.template($('#about-template').html()),
    
    initialize: function(options) {
    },

    render: function() {
	this.$el.html(this.template());
	return this;
    }
    
});

var Blog = Backbone.View.extend({
    template: _.template($('#blog-template').html()),
    
    initialize: function(options) {
    },

    render: function(params) {
	var that = this;
	app.BlogListCollection.fetch({data: { conditions: '{ "_id": "' +  params[0] + '" }'},
				     success: function() {
		
					 that.model = app.BlogListCollection.at(0);
					 // TODO Invalid Model
					 that.$el.html(that.template(that.model.toJSON()));

				     }});
	return this;
    }
});

var NotFound = Backbone.View.extend({
    template: _.template($('#404-template').html()),
    
    initialize: function(options) {
    },

    render: function() {
	this.$el.html(this.template());
	return this;
    }
    
});



