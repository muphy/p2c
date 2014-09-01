"use strict";
define(function(require) {
    require('backbone');
    var tpl = require('text!tpl/main/book_kind_choice_form/step2.html');
    return Backbone.View.extend({
        initialize: function(options) {
            this.options = options || {};

        },
        events: {

        },
        // el: 'ul#book_kind_choice_form>li.step2',
        template: _.template(tpl),

        render: function() {
            var $ul = this.options.wrapper.$el.find('#book_kind_choice_form');
            if($ul.find('.step2').length > 0 ) {

            } else {
                $ul.append('<li class="step2"/>');
                $ul.find('.step2').append(this.template());
            }
            return this;
        }
    });
});
