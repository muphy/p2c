define(function(require) {

	"use strict";

	var $ = require('jquery');
	require('jquery.handsontable');
	var Backbone = require('backbone');
	var PaperkindView = require('views/admin/paperkind.view');
	var Collection = require('collections/paperkinds');
	var tmpl = require('tpl/admin/tpl.jeolsu.parent');

	return Backbone.View.extend({
		initialize: function() {
			this.render();
			var collection = new Collection;
			this.paperkind_view = new PaperkindView({
				collection: collection
			});
		},
		el: '.page',
		events: {},
		render: function() {
			this.$el.html(tmpl.tpl_paperkind_parent());
			return this;
		}
	});
});