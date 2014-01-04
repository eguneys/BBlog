var BlogList = Backbone.Collection.extend({
    model: Blog,
    url: '/api/journals',

    currentPage: 1,
    pageLimit: 5,

    next: function() {
	return this.gotoPage(this.currentPage + 1);
    },

    previous: function() {
	if (!this.hasPrevious()) return false;
	return this.gotoPage(this.currentPage - 1);
    },

    hasPrevious: function() {
	return this.currentPage != 1;
    },
    
    gotoPage: function(no) {
	this.currentPage = no - 0;
	return this.fetch({reset: true, data: { skip: (this.currentPage - 1) * this.pageLimit, limit: this.pageLimit }});
    }
});
