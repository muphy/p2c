define(function(require) {

  "use strict";

  var BasicInputInfoView = require('views/calres/basic.input.info.view');
  var PaperPriceInfoView = require('views/calres/paper.price.info.view');
  return Backbone.View.extend({
    initialize: function() {},
    el: 'div.page',
    events: {},
    render: function() {
      this.$el.html(this.template());
      this.basicInputInfoView = new BasicInputInfoView();
      this.basicInputInfoView.setWrapView(this);
      this.basicInputInfoView.render();

      this.paperPriceInfoView = new PaperPriceInfoView();
      this.paperPriceInfoView.render();
      return this;
    },
    template: function() {
      return ['<div class="container calc-result" style="margin-top: 50px;">',
        '<div class="row basic-input-info"></div>',
        '<div class="row paper-price"></div>',
        '</div>'
      ].join('');
    }
  });
});
