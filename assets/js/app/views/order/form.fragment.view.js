define(function(require) {

    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    require('tpl/order/tpl.order.form');
    var model = require('models/form.fragment.model');
    return Backbone.View.extend({
        initialize: function(options) {
            this.options = options;
            this.model = new model();
            this.templateName = 'tpl.order.form.fragment';
            App.collection.paperkindCollection.on('add', this.appendPaperkind, this);
            App.collection.paperkindCollection.on('sync', this.initFirstPaperkind, this);
        },
        events: {
            'change input[name="book_quantity"]': 'changeBookQuantity',
            'change select[name="paper_kind"]': 'changePaperKind',
            'change input[name="book_standard"]': 'changeBookStandard',
            'change input[name="book_jeolsu"]': 'changeBookJeolsu',
            'change select[name="paper_job"]': 'changePaperJob',
            'change input[name="book_page"]': 'changeBookPage',
            'change input[name="book_front_dosoo"]': 'changeBookFrontDosoo',
            'change input[name="book_back_dosoo"]': 'changeBookBackDosoo',
            'change select[name="coating_nonshine"]': 'changeCoatingNonshine',
            'change input[name="book_tomson"]': 'changeBookTomson',
        },
        changeBookQuantity: function(e) {
            this.model.set({
                'book_quantity': $(e.target).val()
            });
        },
        changePaperKind: function(e) {
            var selected = $(e.target).find('option:selected');
            this.model.set({
                paper_kind: {
                    name: selected.text(),
                    value: selected.val(),
                }
            });
            // var paperkind = App.collection.paperkindCollection.findWhere({id:selected.val()});
            // this.setPaperkindsJob(paperkind.get('type'));
        },
        changeBookStandard: function(e) {
            this.model.set({
                'book_standard': $(e.target).val()
            });
            // console.log(this.model.get(this.rootEl));
        },
        changeBookJeolsu: function(e) {
            this.model.set({
                'book_jeolsu': $(e.target).val()
            });
            // console.log(this.model.get(this.rootEl));
        },
        changePaperJob: function(e) {
            var selected = $(e.target).find('option:selected');
            this.model.set({
                paper_job: {
                    name: selected.text(),
                    value: selected.val()
                }
            });
            // console.log(this.model.get(this.rootEl));
        },
        changeBookPage: function(e) {
            var page = Number($(e.target).val());
            if(page<2 || page > 480) {
                alert('page 범위는 2부터 480');
                return;
            }
            this.model.set({
                book_page: page
            });
            // console.log(this.model.get(this.rootEl));
        },
        changeBookFrontDosoo: function(e) {
            this.model.set({
                book_front_dosoo: $(e.target).val()
            });
            // console.log(this.model.get(this.rootEl));
        },
        changeBookBackDosoo: function(e) {
            this.model.set({
                book_back_dosoo: $(e.target).val()
            });
            // console.log(this.model.get(this.rootEl));
        },
        changeCoatingNonshine: function(e) {
            var selected = $(e.target).find('option:selected');
            this.model.set({
                coating_nonshine: {
                    name: selected.text(),
                    value: selected.val()
                }
            });
        },
        changeBookTomson: function(e) {
            var key = this.rootEl + '.book_tomson';
            this.formData.set({
                book_tomson: $(e.target).val()
            });
        },
        appendPaperkind: function(paperkind) {
            // console.log(this.paperkindCollection.models);
            var $select = this.$el.find('select[name="paper_kind"]');
            $.tmpl('tpl.paper.kind', paperkind.toJSON()).appendTo($select);
        },
        initFirstPaperkind: function() {
            var first = App.collection.paperkindCollection.at(0);
            this.model.set({
                paper_kind: {
                    name: first.get('name'),
                    value: first.get('id')
                }
            });
            var val = first.get('type');
            this.setPaperkindsJob(val);
        },
        setPaperkindsJob: function(val) {
            this.$el.find('input[name="paperkinds_job"]').val(val);
        },
        render: function() {
            var self = this;
            // console.log(this.$el.length);
            // console.log($.tmpl(this.templateName, this.formData.toJSON()).outerHtml());
            this.$el.html($.tmpl(this.templateName, this.model.toJSON()).outerHtml());
            if (App.collection.paperkindCollection.length > 0) {
                _.each(App.collection.paperkindCollection.models, function(paperkind) {
                    self.appendPaperkind(paperkind);
                });
            }
            return this;
        }
    });
});
