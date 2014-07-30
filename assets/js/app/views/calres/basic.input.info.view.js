define(function(require) {

    "use strict";
    var Backbone = require('backbone');
    require('jquery.outerhtml');
    require('tpl/calc/tpl.cal.result');

    return Backbone.View.extend({
        initialize: function() {

        },
        el: 'div.row.basic-input-info',
        events: {},
        setWrapView: function(wrapView) {
            this.wrapView = wrapView;
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        },
        template: function() {
            console.log(App.view.orderFormView.formData.toJSON());
            return $.tmpl('tpl.basic.input.info',App.view.orderFormView.formData.toJSON()).outerHtml();
        }
    });
});
