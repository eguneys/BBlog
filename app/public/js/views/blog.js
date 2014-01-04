var BlogPreView = Backbone.View.extend({
    template: _.template($('#blog-short-template').html()),
    
    initialize: function() {
    },

    render: function() {
	this.$el.html(this.template(this.model.toJSON()));
	return this;
    },
});


var BlogView = Backbone.View.extend({
    template: _.template($('#blog-template').html()),
    
    initialize: function(params) {
	this.model = new Blog({ id: params });

	this.listenTo(this.model, "change", this.render);

	this.model.fetch();
    },

    render: function() {
	this.$el.html(this.template(this.model.toJSON()));
	return this;
    }
});
