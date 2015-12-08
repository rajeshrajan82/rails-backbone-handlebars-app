var LoginView = Backbone.View.extend({
    el: '#login',
    
    template: HandlebarsTemplates['sessions/login'],
    
    events: {
        "submit #new-post": "save"
    },

    initialize: function(){
        this.render();
    },

    render: function(){
//        var self = this;
        var loginTemplate = this.template();
        console.log(loginTemplate);
//        this.$el.empty();
        
//        $(this.el).html(Handlebars.SafeString(loginTemplate));
//        this.$el.html(HandlebarsTemplates["../../templates/sessions/login.hbs"]);
        this.$el.html(this.template());
    },

    save: function(){
        e.preventDefault();
        e.stopPropagation();
        this.collection.create({ 
            email: email,
            password: password
        },{ 
            wait: true, 
            success: function(model, resp, options) 
            { console.log(options); } 
        } );
        
        
        
    }
});
  
