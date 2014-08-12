"use strict";
define(function(require) {
    var tpl = require('text!tpl/lib/slider.tpl');
    var Backbone = require('backbone');
    return Backbone.View.extend({
        initialize: function() {},
        events: {
            'click a.control_prev': 'moveLeft',
            'click a.control_next': 'moveRight',
        },
        el: '.container.page',
        template: _.template(tpl),
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        moveLeft: function(e) {
            $('#slider ul').animate({
                left: +this.slideWidth
            }, 200, function() {
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            });
            e.preventDefault();
        },

        moveRight: function(e) {
            $('#slider ul').animate({
                left: -this.slideWidth
            }, 200, function() {
                $('#slider ul li:first-child').appendTo('#slider ul');
                $('#slider ul').css('left', '');
            });
            e.preventDefault();
        },
        initParam: function() {
            var slideCount = $('#slider ul li').length;
            this.slideWidth = $('#slider ul li').width();
            var slideHeight = $('#slider ul li').height();
            var sliderUlWidth = slideCount * this.slideWidth;

            $('#slider').css({
                width: this.slideWidth,
                height: slideHeight
            });

            $('#slider ul').css({
                width: sliderUlWidth,
                marginLeft: -this.slideWidth
            });

            $('#slider ul li:last-child').prependTo('#slider ul');
        }

    });
});
