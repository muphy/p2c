define(function(require) {

//http://riniblog.egloos.com/1024993 github 에 올리기
	"use strict";
	var $ = require('jquery');
	var Backbone = require('backbone');
	var JeolsuModel = Backbone.Model.extend({});
	var JeolsuCollection = Backbone.Collection.extend({
		model: JeolsuModel,
		url: '/jeolsu/list?jeolsu=8',
		initialize: function() {
			this.url = "/jeolsu/list?jeolsu=8";
		},
		changeUrl: function(jeolsu) {
			if (jeolsu == 8) {
				this.url = "/jeolsu/list?jeolsu=8";
			} else if (jeolsu == 16) {
				this.url = "/jeolsu/list?jeolsu=16";
			} else if (jeolsu == 24) {
				this.url = "/jeolsu/list?jeolsu=24";
			} else if (jeolsu == 32) {
				this.url = "/jeolsu/list?jeolsu=32";
			} else if (jeolsu == 'all') {
				this.url = "/jeolsu/list?limit=1000";
			} else {
				alert('unknown jeolsu:'+jeolsu);
			}
		}
	});
	return JeolsuCollection;
});