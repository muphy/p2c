define(['jquery', 'underscore', 'backbone', 'jquery.handsontable', 'bootstrap'], function($, _, Backbone, handsontable) {

    var View = Backbone.View.extend({

        initialize: function(options) {
            this.collection.on('sync', this.render, this);
            this.collection.fetch();
        },
        el: '#paperkind',
        events: {},
        render: function() {
            var _thisView = this;
            var data = this.collection.toJSON();
            console.log(data);
            this.$el.handsontable({
                data: data,
                colHeaders: [
                    "용지명", "원가격", "할인율", "최종가격", "종류"
                ],
                height: 600,
                stretchH: 'all',
                scrollV: 'auto',
                columns: [{
                    data: "name",
                    type: 'text'
                }, {
                    data: "previousPrice",
                    type: 'numeric',
                    format: '0,0'
                }, {
                    data: "discountRate",
                }, {
                    data: "finalPrice",
                    type: 'numeric',
                    format: '0,0',
                    readOnly: true
                }, {
                    data: "type",
                    type: 'text'
                }],
                afterChange: function(changes, source) {
                    // console.log(changes);
                    // console.log(source);
                }
            });
        }
    });

    return View;
});