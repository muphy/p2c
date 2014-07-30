define(function(require) {

    "use strict";
    // Number.prototype.round = function(places) {
    //     return +(Math.round(this + "e+" + places) + "e-" + places);
    // }
    var Backbone = require('backbone');
    var model = Backbone.NestedModel.extend({
        defaults: {
            page: 1,
            jeolsu: 0,
            amount: 0,
            dosoo_front: 0,
            dosoo_back: 0
        },
        jeongmiyoensu: function() {
            // Math.round = IF($C$18 = 0, 0, ROUND(C48 * $C$9 / 500 / $C$18 / 2, 2))
            if (this.jeolsu == 0)
                return 0;
            var page = this.get('page');
            var amount = this.get('amount');
            var jeolsu = this.get('jeolsu');
            var result = page * amount / 500 / jeolsu / 2;
            return result.toFixed(1);
        },
        loss_front: function() {
            // IF(C21=0,"0",IF(C49<=5,"0.3",IF(C49<=30,"0.7",IF(C49<=50,"1.5",IF(C49<=100,"2",IF(C49>100,"2.5",0))))))
            var dosoo_front = this.get('dosoo_front');
            return loss(dosoo_front);
        },
        loss_back: function() {
            // IF(C22=0,"0",IF(C49<=5,"0.3",IF(C49<=30,"0.7",IF(C49<=50,"1.5",IF(C49<=100,"2",IF(C49>100,"2.5",0))))))
            var dosoo_back = this.get('dosoo_back');
            return loss(dosoo_back);
        },
        sum: function() {
        	return this.jeongmiyoensu()+this.loss_front()+this.loss_back();
        },
        loss: function(dosoo) {
            if (dosoo == 0) {
                return 0;
            }
            var jeongmiyoensu = this.jeongmiyoensu();
            if (jeongmiyoensu <= 5) {
                return 0.3;
            }
            if (jeongmiyoensu <= 30) {
                return 0.7;
            }
            if (jeongmiyoensu <= 50) {
                return 1.5;
            }
            if (jeongmiyoensu <= 100) {
                return 2;
            }
            if (jeongmiyoensu > 100) {
                return 2.5;
            }
        }
    });
    return model;
});
