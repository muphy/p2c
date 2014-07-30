define(function(require) {

    "use strict";

    var Backbone = require('backbone');
    var FormData = Backbone.NestedModel.extend({
        defaults: {
            product_name: "test_품명1",
            paper_cover: {},
            paper_inside: {},
            postcard: {}
        },
        setJeolsuCollection: function(jeolsuList) {
            this.set('jeolsuCollection', $.extend(true, {}, jeolsuList));
        },
        calcFilmNum: function() {

            var paper_cover_model = this.get('paper_cover');
            var paper_cover_book_jeolsu = Number(paper_cover_model.book_jeolsu);
            var paper_cover_book_page = Number(paper_cover_model.book_page);
            var paper_cover_book_front_dosoo = Number(paper_cover_model.book_front_dosoo);
            var paper_cover_book_back_dosoo = Number(paper_cover_model.book_back_dosoo);
            var paper_cover_logic = this.findLogic(paper_cover_book_jeolsu, paper_cover_book_page);
            var paper_cover_hongPanNum = paper_cover_logic.get('hongPanNum');
            var paper_cover_donPanNum = paper_cover_logic.get('donPanNum');
            var paper_cover_hongPan_filmNum = (paper_cover_book_front_dosoo + paper_cover_book_back_dosoo) * paper_cover_hongPanNum;
            var paper_cover_donPan_filmNum = (paper_cover_book_front_dosoo + paper_cover_book_back_dosoo) * paper_cover_donPanNum;
            var paper_cover_filmNum = paper_cover_hongPan_filmNum + paper_cover_donPan_filmNum;
            this.set('paper_cover.filmNum', paper_cover_filmNum);
            var paper_cover_paper_kind = this.findPaperPrice(paper_cover_model.paper_kind.value);
            this.set('paper_cover.paper_kind', paper_cover_paper_kind.toJSON());
            console.log(paper_cover_model);


            var paper_inside_model = this.get('paper_inside');
            var paper_inside_book_jeolsu = Number(paper_inside_model.book_jeolsu);
            var paper_inside_book_page = Number(paper_inside_model.book_page);
            var paper_inside_book_front_dosoo = Number(paper_inside_model.book_front_dosoo);
            var paper_inside_book_back_dosoo = Number(paper_inside_model.book_back_dosoo);
            var paper_inside_logic = this.findLogic(paper_inside_book_jeolsu, paper_inside_book_page);
            var paper_inside_hongPanNum = paper_inside_logic.get('hongPanNum');
            var paper_inside_donPanNum = paper_inside_logic.get('donPanNum');
            var paper_inside_hongPan_filmNum = (paper_inside_book_front_dosoo + paper_inside_book_back_dosoo) * paper_inside_hongPanNum;
            var paper_inside_donPan_filmNum = (paper_inside_book_front_dosoo + paper_inside_book_back_dosoo) * paper_inside_donPanNum;
            var paper_inside_filmNum = paper_inside_hongPan_filmNum + paper_inside_donPan_filmNum;
            this.set('paper_inside.filmNum', paper_inside_filmNum);
            var paper_inside_paper_kind = this.findPaperPrice(paper_inside_model.paper_kind.value);
            this.set('paper_inside.paper_kind', paper_inside_paper_kind.toJSON());
            console.log(paper_inside_model);

            var postcard_model = this.get('postcard');
            var postcard_book_jeolsu = Number(postcard_model.book_jeolsu);
            var postcard_book_page = Number(postcard_model.book_page);
            var postcard_book_front_dosoo = Number(postcard_model.book_front_dosoo);
            var postcard_book_back_dosoo = Number(postcard_model.book_back_dosoo);
            var postcard_logic = this.findLogic(postcard_book_jeolsu, postcard_book_page);
            var postcard_hongPanNum = postcard_logic.get('hongPanNum');
            var postcard_donPanNum = postcard_logic.get('donPanNum');
            var postcard_hongPan_filmNum = (postcard_book_front_dosoo + postcard_book_back_dosoo) * postcard_hongPanNum;
            var postcard_donPan_filmNum = (postcard_book_front_dosoo + postcard_book_back_dosoo) * postcard_donPanNum;
            var postcard_filmNum = postcard_hongPan_filmNum + postcard_donPan_filmNum;
            this.set('postcard.filmNum', postcard_filmNum);
            var postcard_paper_kind = this.findPaperPrice(postcard_model.paper_kind.value);
            this.set('postcard.paper_kind', postcard_paper_kind.toJSON());
            console.log(postcard_model);

        },
        findLogic: function(jeolsu, page) {
            return App.collection.jeolsuCollection.findWhere({
                jeolsu: jeolsu,
                page: page
            });
        },
        findPaperPrice: function(val) {
            var models = App.collection.paperkindCollection.models;
            var m1 = _.findWhere(models, {
                id: val
            });
            var m2 = _.where(models, {
                id: val
            });
            return App.collection.paperkindCollection.findWhere({
                id: val
            });
        }
    });
    return FormData;
});
