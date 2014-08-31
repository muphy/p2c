"use strict";
define(function(require) {
    require('backbone');
    var navbar_static_top = require('views/main/navbar.static.top.view');
    return Backbone.View.extend({
        initialize: function() {
            this.navbar_static_top = new navbar_static_top();
        },
        events: {

        },
        el: '#content',
        // template: _.template(tpl_asheet),
        render: function() {
            return this;
        },
    });
});
