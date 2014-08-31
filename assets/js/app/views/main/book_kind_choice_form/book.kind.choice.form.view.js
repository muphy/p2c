"use strict";
define(function(require) {
    require('backbone');
    var tpl = require('text!tpl/main/book_kind_choice_form/book_kind_choice_form.html');
    var step1 = require('views/main/book_kind_choice_form/step1.view');
    var step2 = require('views/main/book_kind_choice_form/step2.view');

    return Backbone.View.extend({
        initialize: function() {

        },
        events: {

        },
        el: '#book_kind_choice_form_wrap',
        template: _.template(tpl),
        addStep1: function() {
            if (!this.step1) {
                this.step1 = new step1();
            }
            this.step1.render();
        },
        addStep2: function() {
            if (!this.step2) {
                this.step2 = new step2();
            }
            this.step2.render();
        },
        render: function() {
            this.$el.prepend(this.template());
            this.addStep1();
            this.addStep2();
            this.tickBxSlider();
            return this;
        },
        tickBxSlider: function() {
            require('jquery.bxslider');
            this.$el.find('.bxslider').bxSlider();
        },
    });
});
