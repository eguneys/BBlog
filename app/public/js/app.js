var NavigationRoutes = {
    "Home": {
	route: "",
	view: Home
    },
    "About": {
	route: "About",
	view: About
    },
    "default": {
	route: "*default",
	view: NotFound,
	hide: true
    }
}


var AppRouter = new (Backbone.Router.extend({
    initialize: function() {

	this.route(NavigationRoutes['default'].route, 'default');

	for (var key in NavigationRoutes) {
	    if (key != "default")
		this.route(NavigationRoutes[key].route, key);
	}
    },
    
    routes: {
	
    }
}))();
    

$(document).ready(function () {

    new Navbar({el: $('#nav-item-container'), routes: NavigationRoutes});
    new Content({el:$('#container'), routes: NavigationRoutes});


    Backbone.history.start({pushState: true});
});
