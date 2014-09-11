"use strict";
define(function(require) {
    require('backbone');
    var header_upper_region_view = require('views/main/header.upper.region.view');
    var header_branding_region_view = require('views/main/header.branding.region.view');
    var content_view = require('views/main/content/content.calculator.view');
    return Backbone.View.extend({
        initialize: function() {
            this.header_upper_region_view = new header_upper_region_view();
            this.header_branding_region_view = new header_branding_region_view();
            this.content_view = new content_view();
        },
        events: {
            
        },
        render_header: function() {
            this.header_branding_region_view.render();
            this.header_upper_region_view.render();
            this.content_view.render();
        },
        el: 'body',
        render: function() {
            this.render_header();
            return this;
        },
    });
});
