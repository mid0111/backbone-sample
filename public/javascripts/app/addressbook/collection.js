define(function(require) {
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Address = require('app/addressbook/model');

  var AddressCollection = Backbone.Collection.extend({
    model: Address,

    localStorage: new Store('addressbook-sample')

  });
  var Addresses = new AddressCollection;

  return Addresses;
});

