//= require_tree ./templates
//= require_tree ./routers
//= require_tree ./models
//= require_tree ./views

window.EntranceBackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {},
    
    initialize: function(){
        console.log("Initialize App");
    }
}
        

$(document).ready(function(){
    EntranceBackbone.initialize();
})
    
  