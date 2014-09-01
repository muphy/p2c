"use strict";
define(function(require) {
    require('backbone');
    var tpl = require('text!tpl/main/book_kind_choice_form/step1.html');
    return Backbone.View.extend({
        initialize: function(options) {
            this.options = options || {};
        },
        events: {
            'click a' : 'chooseKindOfBook'
        },
        el: 'ul#book_kind_choice_form>li.step1',
        template: _.template(tpl),
        chooseKindOfBook: function(e) {
            e.preventDefault(e);
            var type = $(e.target).data('type');
            this.options.wrapper.buildSteps(type);
        },
        render: function() {
            this.$el.append(this.template());
            return this;
        }
    });
});
