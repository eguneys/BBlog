
app.BlogList = Backbone.Collection.extend({
    model: app.Blog,
    url: '/api/journals',


    currentPage: 0,
    pageLimit: 5,
    
    next: function()  {
	this.currentPage++;
	this.fetchPage();
    },

    previous: function() {
	this.currentPage--;
	this.fetchPage();
    },

    fetchPage: function() {
	this.fetch({reset: true, data: { skip: this.currentPage * this.pageLimit, limit: this.pageLimit }});
    }
});

