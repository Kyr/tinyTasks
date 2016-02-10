/**
 * @type string
 */
const taskTable = `
id, title
1, Tasks #1
2, Tasks #2
3, Tasks #3
4, Tasks #4
5, Tasks #5
6, Tasks #6
7, Tasks #7
8, Tasks #8
9, Tasks #9
10, Tasks #10
`;
const UUT = require('../../gist/csv2rs');
const expect = require('chai').expect;

describe('test simple csv2recordSet converter', () => {
	const expectedFields = ['id', 'title'];
	var testRecordSet = [];
	before(() => testRecordSet = UUT(taskTable));

	it(`should contains 10 elements`, () => expect(testRecordSet.length).to.be.equal(10));

	it('should contains record as object', () => expect(testRecordSet[0]).to.be.an('object'));

	it('should contains valid fields', () => expect(testRecordSet[0]).to.have.all.keys(expectedFields));
	//describe('move it deeper', () =>
	//	testRecordSet.forEach(testRecord =>
	//	)
	//);

});