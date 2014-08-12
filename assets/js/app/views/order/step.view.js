"use strict";
define(function(require) {
    var tpl_asheet = require('text!tpl/order/step.asheet.tpl');
    var tpl_book1 = require('text!tpl/order/step.book1.tpl');
    var tpl_book2 = require('text!tpl/order/step.book2.tpl');

    return Backbone.View.extend({
        initialize: function() {},
        events: {

        },
        el: '.container.page',
        template: _.template(tpl_asheet),
        render: function() {
            this.$el.append(this.template());
            return this;
        },
    });
});
