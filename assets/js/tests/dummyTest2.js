"use strict";

define(function(require) {
	require('backbone-nested');
    var CalcPaperModel = require('models/calc/calc.paper.model');
    var calcPaperModel = new CalcPaperModel({
        page: 2,
        jeolsu: 9,
        amount: 1000,
        daesu: 1
    });
    var run = function() {
        test('페이지:2,절수:9,수량:1000,대수:1 = 정비연수 0.2', function() {
            equal(calcPaperModel.jeongmiyoensu(), 0.2, 'The return should be "0.2".');
        });
    };
    return {
        run: run
    }
});
