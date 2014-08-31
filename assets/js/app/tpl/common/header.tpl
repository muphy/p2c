define(function(require) {	

	$.template('tpl.panel', [
		'<div class="panel panel-danger">'.
		'  <div class="panel-heading">'.
		'    <h3 class="panel-title">Panel title</h3>'.
		'  </div>'.
		'  <div class="panel-body">'.
		'      <dl class="dl-horizontal">'.
		'        <dt>Description lists</dt>'.
		'        <dd>A description list is perfect for defining terms.</dd>'.
		'        <dt>Euismod</dt>'.
		'        <dd>Vestibulum id ligula porta</dd>'.
		'      </dl>'.
		'  </div>'.
		'</div>'.
	].join(''));

});