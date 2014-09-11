"use strict";
define(function(require) {
    require('backbone');
    var tpl = require('text!tpl/main/content/book_kind_choice_form/book_kind_choice_form.html');
    var step1 = require('views/main/content/book_kind_choice_form/step1.view');
    var step2 = require('views/main/content/book_kind_choice_form/step2.view');
    var PaperkindCollection = require('collections/paperkinds');
    var JeolsuCollection = require('models/admin/jeolsucol');
    require('jquery.bxslider');
    return Backbone.View.extend({
        initialize: function(options) {
            this.options = options || {};
            this.wrapper = this.options.wrapper; //#content-wrap
            this.paperkindCollection = new PaperkindCollection();
            this.jeolsuCollection = new JeolsuCollection();
            this.jeolsuCollection.changeUrl('all');
            this.getData();
        },
        events: {

        },
        getData: function() {
            this.paperkindCollection.fetch({});
            this.jeolsuCollection.fetch({});
        },
        el: '#book_kind_choice_form_wrap',
        template: _.template(tpl),
        addStep1: function() {
            if (!this.step1) {
                this.step1 = new step1({
                    wrapper: this
                });
            }
            this.step1.render();
        },
        addStep2: function() {
            if (!this.step2) {
                this.step2 = new step2({
                    wrapper: this
                });
            }
            this.step2.render();
        },
        render: function() {
            this.$el.prepend(this.template());
            this.addStep1();
            return this;
        },
        goToPrev: function() {
            this.bsSlider.goToPrevSlide();
            this.wrapper.decreseStep();
        },
        goToNext: function() {
            this.bsSlider.goToNextSlide();
            this.wrapper.increseStep();
        },
        buildPiece: function(type) {
            // alert(type);
            this.addStep2();
            this.tickBxSlider();
            this.wrapper.buildPiece(type);
            this.goToNext();
        },
        buildBook1: function(type) {
            alert(type);
        },
        buildBook2: function(type) {
            alert(type);
        },
        buildSteps: function(type) {
            switch (type) {
                case 'piece':
                    this.buildPiece(type);
                    break;
                case 'book1':
                    this.buildBook1(type);
                    break;
                case 'book2':
                    this.buildBook2(type);
                    break;
            }
        },
        tickBxSlider: function() {
            if (this.bsSlider) {
                this.bsSlider.destroySlider();
            }
            // alert(this.$el.find('.bxslider').length);
            this.bsSlider = this.$el.find('.bxslider').bxSlider({
                infiniteLoop: false,
                pager: false,
                controls: false
            });
        },

    });
});
