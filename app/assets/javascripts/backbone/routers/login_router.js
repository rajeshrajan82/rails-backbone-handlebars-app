var LoginRouter = Backbone.Router.extend({
    routes: {
        "*sign_in" : "loginView"
    },
    
    loginView: function(params) {
        console.log("Inside Route");
        new LoginView();
//        console.log('app.router.params = ' + params); // just for didactical purposes.
//        window.filter = params.trim() || '';
//        app.todoList.trigger('reset');
    }

});
