"use strict";
//import uut from './solution-compiled';
const uut = require('./../../../metaBright/great7/solution');
const expect = require('chai').expect;

describe('solution for great7', () => {
	const testCaseList = [
		{a: 0, b: 0, expected: false},
// Cases when either a or b are equal to 7
		{a: Number.MAX_SAFE_INTEGER, b: 7, expected: true},
		{a: 0, b: 7, expected: true},
		{a: -Number.MAX_SAFE_INTEGER, b: 7, expected: true},
		{a: Math.round(Math.random() * Number.MAX_SAFE_INTEGER), b: 7, expected: true},
		{a: 7, b: Number.MAX_SAFE_INTEGER, expected: true},
		{a: 7, b: 0, expected: true},
		{a: 7, b: -Number.MAX_SAFE_INTEGER, expected: true},
		{a: 7, b: Math.round(Math.random() * Number.MAX_SAFE_INTEGER), expected: true},

// Cases for sum a and b is 7
		{a: 0, b: 7, expected: true},
		{a: 1, b: 6, expected: true},
		{a: -1, b: 8, expected: true},
		{a: 0, b: 1, expected: false},

// Cases for difference between a nd b is 7
		{a: 0, b: 7, expected: true},
		{a: 1, b: 8, expected: true},
		{a: -1, b: 6, expected: true},
		{a: Number.MAX_SAFE_INTEGER, b: Number.MAX_SAFE_INTEGER - 7, expected: true},
		{a: -Number.MAX_SAFE_INTEGER, b: -Number.MAX_SAFE_INTEGER + 7, expected: true}
	];

	testCaseList.forEach(testCase =>
		it(`should return '${testCase.expected}' for call with '${testCase.a}' and '${testCase.b}'`, () => {
			expect(uut(testCase.a, testCase.b)).to.be.equal(testCase.expected);
		})
	);

});
