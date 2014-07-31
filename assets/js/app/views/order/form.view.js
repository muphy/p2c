define(function(require) {

    "use strict";

    var _ = require('underscore');
    require('jquery.tmpl');
    require('jquery.outerhtml');
    require('backbone-nested');
    require('tpl/order/tpl.order.form');
    var FormData = require('models/form.model')
    var FormFragment = require('views/order/form.fragment.view');
    var CalcPaperModel = require('models/calc/calc.paper.model');
    return Backbone.View.extend({
        initialize: function() {
            var calcPaperModel = new CalcPaperModel({
                page: 2,
                jeolsu: 9,
                amount: 1000,
                daesu: 1
            });
            alert('정미연수:'+calcPaperModel.jeongmiyoensu());
            var PaperkindCollection = require('collections/paperkinds');
            App.collection.paperkindCollection = new PaperkindCollection();

            var JeolsuCollection = require('models/admin/jeolsucol');
            App.collection.jeolsuCollection = new JeolsuCollection();
            App.collection.jeolsuCollection.changeUrl('all');
            App.collection.jeolsuCollection.on('sync', this.getJeolsuCollection, this);

            this.formData = new FormData;
            this.getData();
            this.paper_cover_view = new FormFragment({});
            this.formData.coverModel = this.paper_cover_view.model;
            this.paper_inside_view = new FormFragment({});

            this.postcard_view = new FormFragment({});
        },
        el: '.container.page',
        events: {
            'click .btn.calc': 'calculator',
            'change input[name="product_name"]': 'changeProductName'
        },
        getData: function() {
            App.collection.paperkindCollection.fetch({});
            App.collection.jeolsuCollection.fetch({});
        },
        changeProductName: function(e) {
            this.formData.set('product_name', $(e.target).val());
        },
        calculator: function(e) {
            this.formData.set('paper_cover', this.paper_cover_view.model.toJSON());
            this.formData.set('paper_inside', this.paper_inside_view.model.toJSON());
            this.formData.set('postcard', this.postcard_view.model.toJSON());
            this.formData.calcFilmNum();
            // console.log(list);
            location.hash = "#calcres";
        },
        getJeolsuCollection: function() {
            this.jeolsuList = this.jeolsuCollection;
            this.formData.setJeolsuCollection(this.jeolsuList);
        },
        buildFragment: function() {
            this.paper_cover_view.setElement('#paper_cover');
            this.paper_inside_view.setElement('#paper_inside');
            this.postcard_view.setElement('#postcard');
        },
        render: function() {
            var self = this;
            this.$el.html($.tmpl('tpl.order.form', this.formData.toJSON()).outerHtml());
            // console.log(this.formData);
            this.buildFragment();
            this.paper_cover_view.render();
            this.paper_inside_view.render();
            this.postcard_view.render();
            return this;
        }
    });
});
