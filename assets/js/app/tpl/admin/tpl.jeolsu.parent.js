define(function(require) {

	"use strict";

	require('jquery.tmpl');
	require('jquery.outerhtml');

	$.template('tpl.jeolsu.parent', [
		'<div class="container wrap-jeolsu" style="margin-top: 50px;">',
		'  <div class="row jeolsu">',
		'    <div class="col-md-12">',
		'      <ul class="nav nav-tabs" id="jeolsuTab">',
		'        <li class="active"><a href="#" data-jeolsu="8">8절=16px</a></li>',
		'        <li><a href="#" data-jeolsu="16">16절=32px</a></li>',
		'        <li><a href="#" data-jeolsu="24">24절=48px</a></li>',
		'        <li><a href="#" data-jeolsu="32">32절=64px</a></li>',
		'      </ul>',
		'      <div class="tab-content">',
		'        <div class="tab-pane active">',
		'          <div id="jeolsu-box"></div>',
		'      </div>',
		'    </div>',
		'  </div>',
		'</div>'
	].join(''));

	$.template('tpl.paperkind.parent', [
		'<div class="container paperkind" style="margin-top: 50px;">',
		'  <div class="row">',
		'    <div class="col-md-12">',
		'      <div id="paperkind"></div>',
		'    </div>',
		'  </div>',
		'</div>'
	].join(''));
	return {
		tpl_jeolsu_parent: function() {
			return $.tmpl('tpl.jeolsu.parent', {}).outerHtml();
		},
		tpl_paperkind_parent: function() {
			return $.tmpl('tpl.paperkind.parent', {});
		}
	};
});