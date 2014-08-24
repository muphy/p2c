"use strict";
define(function(require) {
    require('backbone');
    var Slider = require('slider');
    return Backbone.View.extend({
        initialize: function() {
            if (!this.slider) {
                this.slider = new Slider({
                    el: '.container.step-slider'
                });
            }
        },
        events: {

        },
        el: '#content',
        // template: _.template(tpl_asheet),
        render: function() {
            // this.$el.append(this.template());
            this.slider.render().initParam();
            return this;
        },
    });
});