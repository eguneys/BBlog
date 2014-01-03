var Home = Backbone.View.extend({


    template: _.template($('#home-template').html()),
    
    initialize: function () {
	
    },

    render: function () {
	this.$el.html(this.template());
	return this;
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
