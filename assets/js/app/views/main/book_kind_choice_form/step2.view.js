"use strict";
define(function(require) {
    require('backbone');
    var tpl = require('text!tpl/main/book_kind_choice_form/step2.html');
    return Backbone.View.extend({
        initialize: function() {
        },
        events: {

        },
        el: 'ul#book_kind_choice_form>li.step2',
        template: _.template(tpl),
        addStep1: function() {

        },
        render: function() {
            this.$el.append(this.template());
            return this;
        }
    });
});
