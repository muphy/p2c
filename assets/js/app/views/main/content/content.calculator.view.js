"use strict";
define(function(require) {
    require('backbone');
    var book_kind_choice_form_view = require('views/main/content/book_kind_choice_form/book.kind.choice.form.view');
    var calculator_breadcums_view = require('views/main/content/calculator.breadcums.view');
    return Backbone.View.extend({
        initialize: function() {
            this.book_kind_choice_form_view = new book_kind_choice_form_view({
                wrapper: this
            });
            this.calculator_breadcums_view = new calculator_breadcums_view({
                wrapper: this
            });
            this.currentStep = 1;
        },
        events: {
            'click #process-pager .btn.previous': 'goToPrev',
            'click #process-pager .btn.next': 'goToNext'
        },
        el: '#content-wrap',
        goToPrev: function(e) {
            e.preventDefault(e);
            this.book_kind_choice_form_view.goToPrev();
        },
        goToNext: function(e) {
            e.preventDefault(e);
            this.book_kind_choice_form_view.goToNext();
        },
        increseStep: function() {
            this.calculator_breadcums_view.increseStep();
            this.currentStep++;
        },
        decreseStep: function() {
            this.calculator_breadcums_view.decreseStep();
            this.currentStep--;
        },
        buildPiece: function(type) {
            this.calculator_breadcums_view.render(type);
        },
        render: function() {
            this.book_kind_choice_form_view.render();
            return this;
        },
    });
});
