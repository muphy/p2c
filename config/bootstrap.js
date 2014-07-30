/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

/**
 * node js doc
 * http://nodejs.org/docs/latest/api/globals.html#globals_dirname
 */

// excel parser
// https://www.npmjs.org/package/excel-parser
var async = require('async');
var path = require("path"),
	excelParser = require('excel-parser');

module.exports.bootstrap = function(cb) {

	// It's very important to trigger this callack method when you are finished 
	// with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
	// process8jeol();
	Jeolsutable.count().done(function(err, result) {
		if (err) {
			console.error(err);
		}
		if (!result) {
			async.waterfall([
				process8jeol,
				process16jeol,
				process24jeol,
				process32jeol,
				insertPaperJob
			], function(err, result) {
				if (err) {
					console.error(err);
				}
				console.log(result);
			});
		} else {
			console.log('data exists!!!');
		}
	});

	// var paperkindsService = require('../api/services/paperkindsService');
	
	cb();

};

function process8jeol(callback) {
	console.log('process8jeol called!');
	var dataPath = path.join(__dirname, '../data', 'jeolsu_1.xlsx');
	var jeolsu = 8;
	excelParser.parse({
		inFile: dataPath,
		worksheet: 1,
		skipEmpty: true
	}, function(err, records) {
		if (err) {
			console.error(err);
			return;
		}
		insertRow(jeolsu, records);
		callback(null);
		//console.log(rows.length);
	});
}

function process16jeol(callback) {
	console.log('process16jeol called!');
	var dataPath = path.join(__dirname, '../data', 'jeolsu_1.xlsx');
	var jeolsu = 16;
	excelParser.parse({
		inFile: dataPath,
		worksheet: 2,
		skipEmpty: true
	}, function(err, records) {
		if (err) {
			console.error(err);
			return;
		}
		insertRow(jeolsu, records);
		callback(null);
		//console.log(rows.length);
	});
}

function process24jeol(callback) {
	console.log('process24jeol called!');
	var dataPath = path.join(__dirname, '../data', 'jeolsu_1.xlsx');
	var jeolsu = 24;
	excelParser.parse({
		inFile: dataPath,
		worksheet: 3,
		skipEmpty: true
	}, function(err, records) {
		if (err) {
			console.error(err);
			return;
		}
		insertRow(jeolsu, records);
		callback(null);
		//console.log(rows.length);
	});
}

function process32jeol(callback) {
	console.log('process32jeol called!');
	var dataPath = path.join(__dirname, '../data', 'jeolsu_1.xlsx');
	var jeolsu = 32;
	excelParser.parse({
		inFile: dataPath,
		worksheet: 4,
		skipEmpty: true
	}, function(err, records) {
		if (err) {
			console.error(err);
			return;
		}
		insertRow(jeolsu, records);
		callback(null);
		//console.log(rows.length);
	});
}

function insertRow(jeolsu, records) {
	for (var i = 1; i < records.length; i++) {
		var row = records[i];
		var page = row[0];
		var row_length = row.length;
		var donPanNum = row[row_length - 1];
		var hongPanNum = row[row_length - 2];
		var totalPanNum = row[row_length - 3];
		var jeosu = {
			jeolsu: jeolsu,
			page: page,
			donPanNum: donPanNum,
			hongPanNum: hongPanNum,
			totalPanNum: totalPanNum
		};
		for (var j = 1; j < row_length - 3; j++) {
			var colName = j + 'pan';
			jeosu[colName] = row[j];
		}
		Jeolsutable.create(jeosu, function created(err) {
			if (err) {
				console.log(err);
			}
		});
	}
}


function insertPaperJob() {
	var paperkindsService = require('../api/services/paperkindsService');
	paperkindsService.process();
}
