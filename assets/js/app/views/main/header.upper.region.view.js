"use strict";
define(function(require) {
    require('backbone');
    var tpl = require('text!tpl/common/header/header-upper-region.html');
    // var _ = require('underscore');
    return Backbone.View.extend({
        initialize: function() {
        },
        events: {

        },
        el: '#navigation',
        template: _.template(tpl),
        render: function() {
            this.$el.prepend(this.template());
            return this;
        }
    });
});
