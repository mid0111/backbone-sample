define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Addresses = require('app/addressbook/collection');
  var Address = require('app/addressbook/model');
  var AddressView = require('app/addressbook/view');

  var AppView = Backbone.View.extend({
    el: $('#app'),

    events: {
      'keypress #new-address': 'keyPress',
      'click #delete-all': 'deleteAll'
    },

    initialize: function() {
      this.input = this.$('#new-Address');
      Addresses.bind('add', this.add, this);
      Addresses.bind('reset', this.addAll, this);
      Addresses.fetch();
    },

    add: function(address) {
      var view = new AddressView({model: address});
      this.$('#list').append(view.render().el);
    },
    
    addAll: function() {
      Address.each(this.add);
    },

    keyPress: function(e) {
      if(e.keyCode === 13) {
        Addresses.create({name: this.input.val()});
        this.input.val('');
      }
    },

    deleteAll: function(e) {
      while(true) {
        var address = Addresses.first();
        if(address == null || address === 'undefined') {
          break;
        }
        address.destroy();
      }
    }
  });

  return AppView;
});
