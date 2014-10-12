"use strict";
define(function(require) {
    require('backbone');
    return Backbone.View.extend({
        initialize: function(options) {
            this.options = options || {};
            this.currentStep = 1;
        },
        events: {

        },
        el: '#step-breadcums',
        increseStep: function() {
            // console.log(this.$el.length);
            // console.log(this.$el.find('a.current').length);
            // console.log(this.$el.find('a.current').next().length);
            if (this.currentStep < 4) {
                this.$el.find('.current').removeClass('current').next().addClass('current');
                this.currentStep++;
            }
        },
        decreseStep: function() {
            // console.log(this.$el.length);
            // console.log(this.$el.find('a.current').length);
            // console.log(this.$el.find('a.current').next().length);
            if (this.currentStep < 1) {
                this.$el.find('.current').removeClass('current').prev().addClass('current');
                this.currentStep--;
            }
        },
        renderPiece: function() {
            // this.$el.empty();
            var tpl = [
                '<a class="current"><span class="badge">1</span> 인쇄물 종류선택</a>',
                '<a><span class="badge">2</span> 수치입력</a>',
                '<a><span class="badge">3</span> 계산결과</a>',
                '<a><span class="badge">4</span> 임시</a>'
            ].join('');
            this.$el.html(tpl);
        },
        renderBook1: function() {

        },
        renderBook2: function() {

        },
        render: function(type) {
            switch (type) {
                case 'piece':
                    this.renderPiece();
                    break;
                case 'book1':
                    this.renderBook1();
                    break;
                case 'book2':
                    this.renderBook2();
                    break;
            }
            return this;
        },
    });
});
