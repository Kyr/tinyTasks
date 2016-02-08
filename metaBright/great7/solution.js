"use strict";
module.exports = solution;
//export default solution;

/**
 * This function should return true when:
 * either a or b are equal to 7;
 * sum of a and b are equal to 7;
 * difference between a and b are equal to 7.
 * Otherwise should return false.
 * @see ./test.spec.js
 * @param {number} a
 * @param {number} b
 * @return boolean
 */
function solution(a, b) {
	var conditions = [
		a === 7, b === 7,
		a + b === 7,
		Math.abs(a - b) === 7
	];

	return conditions.some(condition => condition);
}