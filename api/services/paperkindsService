var path = require("path");
var excelParser = require('excel-parser');

module.exports = {
	inserPapers: function() {
		var self = this;
		Paperkinds.count().done(function(err, result) {
			if (err) {
				console.error(err);
			}
			if (!result) {
				self.process();
			} else {
				console.log('paperkinds data exists!!!');
			}
		});
	},
	process: function() {
		var self = this;
		var dataPath = path.join(__dirname, '../../data', 'paper.xlsx');
		// console.log(dataPath);
		excelParser.parse({
			inFile: dataPath,
			worksheet: 1,
			skipEmpty: true
		}, function(err, records) {
			if (err) {
				console.error('file:'+dataPath);
				console.error(err);
				return;
			}
			self.insertRow(records);
		});
	},
	insertRow: function(records) {
		for (var i = 1; i < records.length; i++) {
			var row = records[i];
			var name = row[0];
			// console.log(name);
			var previousPrice = row[1];
			var discountRate = row[3];
			var type = row[4];
			var paperkind = {
				name: name,
				previousPrice: previousPrice,
				discountRate: discountRate,
				type: type
			};
			Paperkinds.create(paperkind, function created(err) {
				if (err) {
					console.log(err);
				}
			});
		}
	}
};