define(function(require) {

	"use strict";

	var $ = require('jquery');
	require('jquery.handsontable');
	var Backbone = require('backbone');
	var JeolsuView = require('views/admin/jeolsu.view');
	var tmpl = require('tpl/admin/tpl.jeolsu.parent');

	var JeolsuParentView = Backbone.View.extend({
		initialize: function() {
			var self = this;
			this.render();
			this.jeolsuView = new JeolsuView({
				collection: this.collection
			});
		},
		el: 'div.container.page',
		events: {
			'click ul#jeolsuTab>li>a': 'clickTab'
		},
		render: function() {
			this.$el.html(tmpl.tpl_jeolsu_parent());
			return this;
		},
		clickTab: function(e) {
			$(e.target).parent().addClass('active').siblings().removeClass('active');
			e.preventDefault();
			var jeolsu_div = $(e.target).data('jeolsu');
			this.jeolsuView.fetchData(jeolsu_div);
		}
	});

	return JeolsuParentView;
});