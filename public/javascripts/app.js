requirejs.config({
  baseUrl: 'lib',
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage' : {
        exports: 'backbone.localStorage'
    }
  },
  
  paths: {
    'jquery':        'jquery/jquery',
    'underscore':    'underscore/underscore',
    'backbone':      'backbone/backbone',
    'backbone.localStorage':'backbone.localStorage/backbone.localStorage',
    'app': '../javascripts/app'
  }
});

// Start the main app logic.
requirejs([
  'app/addressbook',
  'underscore', 
  'jquery', 
  'backbone', 
  'backbone.localStorage'], 
function(addressbook) {
  addressbook.initialize();
});
