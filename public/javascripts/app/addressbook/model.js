define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  var Address = Backbone.Model.extend({
    defaults: {
      name: ''
    },

    initialize: function() {
      if(!this.get('name')) {
        this.set({name: this.defaults.name});
      }
    },

    validate: function(attributes) {
      var name = attributes.name;
      if(!name || name === this.defaults.name) {
        return 'Error!';
      }
      return '';
    }
  });

  return Address;
});
