define(function(require) {
  var _ = require('underscore');
  var Backbone = require('backbone');
  var AppView = require('app/main');

  var Router = Backbone.Router.extend({

    routes: {
      '': 'home'
    },
    
    home: function() {
      var App = new AppView;
    }
  });

  return Router;

});
