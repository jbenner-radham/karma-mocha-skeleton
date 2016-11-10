const expect = require('chai').expect;
const foo    = require('../lib/foo');

describe('foo', function () {
    describe('#bar()', function () {
        it('should return "foobar"', function () {
           expect(foo.bar()).to.equal('foobar');
        });
    });
});
