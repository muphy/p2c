define(function(require) {

  "use strict";
  var $ = require('jquery');
  var Backbone = require('backbone');
  var PaperkindModel = Backbone.Model.extend({});
  var PaperkindCollection = Backbone.Collection.extend({
    model: PaperkindModel,
    url: 'http://localhost:1337/paperkind/list?limit=400',
    initialize: function() {
    },
    // parse: function(response) {
    //   var self = this;
    //   console.log(response);
    //   _.each(response,function(paperkind) {
    //     self.add(paperkind);
    //   });
    //   this.reset(response);
    //   return response;
    // }
  });
  return PaperkindCollection;
});
