const assert = require('assert');
const chai = require('chai');
const sinon = require('sinon');

const { debounce } = require('./../src/index');

const expect = chai.expect;

describe('index', function () {
    describe('mocha', function() {
        describe('Array', function() {
            describe('#indexOf()', function() {
                it('should return -1 when the value is not present', function() {
                    assert.equal([1, 2, 3].indexOf(4), -1);
                });
            });
        });
    });

    describe('chai', function () {
        it('everything should be right', function () {
            const foo = 'bar';
            const tea = {
                flavors: [
                    'red',
                    'greed',
                    'fruit',
                ]
            }

            expect(foo).to.be.a('string');
            expect(foo).to.equal('bar');
            expect(foo).to.have.lengthOf(3);
            expect(tea).to.have.property('flavors')
                .with.lengthOf(3);
        })
    })

    describe('sinon', function () {
        before(function () {
            clock = sinon.useFakeTimers();
        });
        after(function () {
            clock.restore();
        });

        it("calls callback after 100ms", function () {
            var callback = sinon.fake();
            var throttled = debounce(callback);

            throttled();

            clock.tick(99);
            assert(callback.notCalled);

            clock.tick(1);
            assert(callback.calledOnce);

            // Also:
            // assert.equals(new Date().getTime(), 100);
        });
    })
})
