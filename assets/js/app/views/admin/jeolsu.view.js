define(['jquery', 'underscore', 'backbone', 'jquery.handsontable', 'bootstrap'], function($, _, Backbone, handsontable) {

    var View = Backbone.View.extend({

        initialize: function(options) {
            var _thisView = this;
            this.maxed = false;
            this.windowEl = $(window);
            this.availableWidth = 0;
            this.availableHeight = 0;
            this.defaultWidth = $('.col-md-12').width();
            this.containerEl = $('#jeolsu-box');
            this.$('.col-md-12').width();

            $(window).on('resize', function() {
                _thisView.calculateSize();
            });
            this.collection.on('reset', this.changeData, this);
            // this.collection.on("change reset add remove", this.changeData, this);
            this.collection.fetch({reset:true});
        },
        changeData: function() {
            if (this.containerEl.data('handsontable')) {
                this.containerEl.data('handsontable').loadData(this.collection.toJSON());
            } else {
                this.render();
            }
        },
        el: '.row.jeolsu',
        events: {
            "click button.maximize": "maximize",
            "resize window": "calculateSize"
        },
        fetchData: function(jeolsu) {
            this.collection.changeUrl(jeolsu);
            this.collection.fetch({reset:true});
        },
        maximize: function(event) {
            console.log(event.currentTarget.textContent);
            this.maxed = !this.maxed;
            this.containerEl.handsontable('render');
        },
        calculateSize: function() {
            var offset = this.containerEl.offset();
            this.availableWidth = this.windowEl.width() - offset.left + this.windowEl.scrollLeft();
            this.availableHeight = this.windowEl.height() - offset.top + this.windowEl.scrollTop();
        },
        rowHeaders: function() {
            var data = this.collection.toJSON();
            var rowHeaders = [];
            data.forEach(function(e) {
                rowHeaders.push(e.page + ' p');
            });
            return rowHeaders;
        },
        render: function() {
            var _thisView = this;
            var data = this.collection.toJSON();
            this.containerEl.handsontable({
                data: data,
                colHeaders: [
                    "page", "판1", "판2", "판3", "판4", "판5", "판6", "판7", "판8", "판9", "판10", "판11", "판12", "판13", "판14", "판15", "판16", "판17", "판18", "판19", "판20", "판21", "판22", "판23", "판24", "판25", "판26", "판27", "판28", "판29", "판30", "판31", "판32", "인쇄판수", "혼각기판", "돈땡판"
                ],
                // rowHeaders: _thisView.rowHeaders(),
                rowHeaders: true,
                // minSpareRows: 1,
                stretchH: 'all',
                width: function() {
                    if (_thisView.maxed && _thisView.availableWidth === 0) {
                        _thisView.calculateSize();
                    }
                    return _thisView.maxed ? _thisView.availableWidth : _thisView.defaultWidth;
                },
                height: function() {
                    if (_thisView.maxed && _thisView.availableHeight === 0) {
                        _thisView.calculateSize();
                    }
                    return _thisView.maxed ? _thisView.availableHeight : 600;
                },
                scrollV: 'auto',
                columns: [{
                    data: "page",
                    format: '0p',
                    readOnly: true
                }, {
                    data: "1pan",
                    type: "numeric"
                }, {
                    data: "2pan",
                    type: "numeric"
                }, {
                    data: "3pan",
                    type: "numeric"
                }, {
                    data: "4pan",
                    type: "numeric"
                }, {
                    data: "5pan",
                    type: "numeric"
                }, {
                    data: "6pan",
                    type: "numeric"
                }, {
                    data: "7pan",
                    type: "numeric"
                }, {
                    data: "8pan",
                    type: "numeric"
                }, {
                    data: "9pan",
                    type: "numeric"
                }, {
                    data: "10pan",
                    type: "numeric"
                }, {
                    data: "11pan",
                    type: "numeric"
                }, {
                    data: "12pan",
                    type: "numeric"
                }, {
                    data: "13pan",
                    type: "numeric"
                }, {
                    data: "14pan",
                    type: "numeric"
                }, {
                    data: "15pan",
                    type: "numeric"
                }, {
                    data: "16pan",
                    type: "numeric"
                }, {
                    data: "17pan",
                    type: "numeric"
                }, {
                    data: "18pan",
                    type: "numeric"
                }, {
                    data: "19pan",
                    type: "numeric"
                }, {
                    data: "20pan",
                    type: "numeric"
                }, {
                    data: "21pan",
                    type: "numeric"
                }, {
                    data: "22pan",
                    type: "numeric"
                }, {
                    data: "23pan",
                    type: "numeric"
                }, {
                    data: "24pan",
                    type: "numeric"
                }, {
                    data: "25pan",
                    type: "numeric"
                }, {
                    data: "26pan",
                    type: "numeric"
                }, {
                    data: "27pan",
                    type: "numeric"
                }, {
                    data: "28pan",
                    type: "numeric"
                }, {
                    data: "29pan",
                    type: "numeric"
                }, {
                    data: "30pan",
                    type: "numeric"
                }, {
                    data: "31pan",
                    type: "numeric"
                }, {
                    data: "32pan",
                    type: "numeric"
                }, {
                    data: "totalPanNum",
                    type: "numeric"
                }, {
                    data: "hongPanNum",
                    type: "numeric"
                }, {
                    data: "donPanNum",
                    type: "numeric"
                }],
                afterChange: function(changes, source) {
                    console.log(changes);
                    console.log(source);
                }
            });
        }
    });

    return View;
});