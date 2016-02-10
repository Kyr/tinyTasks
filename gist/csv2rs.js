"use strict";
module.exports = function(csv) {
	var headers = {};
	var recordSet = [];

	const lines = csv.split(/\n/).filter(line => line.length);
	const cells = lines.map(line => line.split(/,/).map(cell => cell.trim()));

	cells.shift().forEach((header, index) => headers[index] = header);
	cells.forEach(line => {
		var record = {};
		for (let headerIndex in headers) {
			if(headers.hasOwnProperty(headerIndex)) {
				record[headers[headerIndex]] = line[parseInt(headerIndex)];
			}
		}
		recordSet.push(record);
	});

	return recordSet;
};