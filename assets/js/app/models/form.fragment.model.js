define(function(require) {

    "use strict";
    require('backbone-nested');
    // var Backbone = require('backbone');
    var model = Backbone.NestedModel.extend({
        defaults: {
            book_quantity: 1,
            paper_kind: {
                name: 'null',
                value: 'null'
            },
            book_standard: '100*190',
            book_jeolsu: 16,
            paper_job: {
                name: '국전',
                value: 'kukjeon'
            },
            book_page: 2,
            book_front_dosoo: 1,
            book_back_dosoo: 1,
            book_fold: 0,
            coating_nonshine: {
                name: '무광',
                value: 'coating_nonshine'
            },
            book_tomson: {
                name: '미사용',
                value: 'book_tomson'
            },
            book_cuttiong: {
                name: '미사용',
                value: 'no'
            },
            book_film: {
                name: '미사용',
                value: 'no'
            },
            filmNum: 0
        },
        initialize: function(options) {
            this.options = options;
        },
        calcurate: function() {
            var book_jeolsu = Number(book_jeolsu);
            var book_page = Number(book_page);
            var book_front_dosoo = Number(book_front_dosoo);
            var book_back_dosoo = Number(book_back_dosoo);
            var logic = this.findLogic(book_jeolsu, book_page);
            var hongPanNum = logic.hongPanNum;
            var donPanNum = logic.donPanNum;
            var hongPan_filmNum = (book_front_dosoo + book_back_dosoo) * hongPanNum;
            var donPan_filmNum = (book_front_dosoo + book_back_dosoo) * donPanNum;
            var filmNum = hongPan_filmNum + donPan_filmNum;
            return filmNum;
        },
        findLogic: function(jeolsu, page) {
            return App.collection.jeolsuCollection.findWhere({
                jeolsu: jeolsu,
                page: page
            });
        }
    });
    return model;

});
