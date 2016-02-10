"use strict";
module.exports = csv2recordSet;
/**
 *
 * @param {String} csv Expected that it should be multi line string with comma separated fields and \n separated record
 * @return [Object] Array of records where fields named as described in first line of `csv` argument
 */
function csv2recordSet(csv) {
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
}