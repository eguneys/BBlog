var app = app || {};

$(document).ready(function() {
    
    app.MyRouter = new Workspace();

    new Navbar({el:$('#nav-item-container')});
    new Content({el:$('#container')});

    app.BlogListCollection = new app.BlogList();


    Backbone.history.start({pushState: true});
});
