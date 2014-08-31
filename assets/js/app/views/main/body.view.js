"use strict";
define(function(require) {
    require('backbone');
    var header_upper_region_view = require('views/main/header.upper.region.view');
    var header_branding_region_view = require('views/main/header.branding.region.view');
    var book_kind_choice_form_view = require('views/main/book_kind_choice_form/book.kind.choice.form.view');
    return Backbone.View.extend({
        initialize: function() {
            this.header_upper_region_view = new header_upper_region_view();
            this.header_branding_region_view = new header_branding_region_view();
            this.book_kind_choice_form_view = new book_kind_choice_form_view();
        },
        events: {

        },
        render_header: function() {
            this.header_branding_region_view.render();
            this.header_upper_region_view.render();

            this.book_kind_choice_form_view.render();
        },
        el: 'body',
        render: function() {
            this.render_header();
            return this;
        },
    });
});
