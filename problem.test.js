/**
 * problem.test.js tests the file 'problem.js'.
 * 
 * To run your tests run tests.html in the browser.
 * Every time you save your changes you can refresh the page
 * to re-run the tests.
 * 
 * To see what options you can use after expect(), check out
 *  http://chaijs.com/api/bdd/
 */
var expect = chai.expect;

describe("Adder Function", function(){
    it("Adds two numbers", function(){
        expect(adder(1,1)).to.equal(0)
    });
});
