var Login = Backbone.Model.extend({
    paramRoot: 'user'
});
    
var LoginsCollection = Backbone.Collection.extend ({
    model: Login,
    url: '/'
});
