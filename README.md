# mocha-chai-sinon

study project to understand how to work with tree packages:
- mocha
- chai
- sinon

## understanding rus 

**mocha** - фреймворк для тестирования, благодаря ему можно писать:
- ```descript('popup checking')```
- ```it('should show popup')```

**chai** - либа, с помощью которой можно писать человеко-подобные выражения для проверки значений:
- ```expect(foo).to.equal('bar')```
- ```foo.should.equal('bar')```
- ```assert.equal(foo, 'bar')```

**sinon** - либа, благодрая которой можно делать моки, стабы в тестах, например:
```
before(function () {
    clock = sinon.useFakeTimers();
});
it('calls callback after 100ms', function () {
    var callback = sinon.fake();
    var throttled = debounce(callback);

    throttled();

    clock.tick(99);
    assert(callback.notCalled);

    clock.tick(1);
    assert(callback.calledOnce);
}
```

## info from sites

### mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on [GitHub](https://github.com/mochajs/mocha).

https://mochajs.org/

### chai

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel.

#### Expect
```js
var expect = chai.expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors')
.with.lengthOf(3);
```

#### Should
```js
chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
tea.should.have.property('flavors')
  .with.lengthOf(3);
```

#### Assert
```js
var assert = chai.assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
```

https://www.chaijs.com/

### sinon

Standalone test spies, stubs and mocks for JavaScript.
Works with any unit testing framework.

#### Faking time

“I don’t always bend time and space in unit tests, but when I do, I use Buster.JS + Sinon.JS”

[Brian Cavalier, Cujo.JS](https://twitter.com/briancavalier/status/225617077346635776)

Testing time-sensitive logic without the wait is a breeze with Sinon.JS. The following function debounces another function - only when it has not been called for 100 milliseconds will it call the original function with the last set of arguments it received.

```js
function debounce(callback) {
  var timer;
  return function () {
    clearTimeout(timer);
    var args = [].slice.call(arguments);
    timer = setTimeout(function () {
      callback.apply(this, args);
    }, 100);
  };
}
```

Thanks to Sinon.JS’ time-bending abilities, testing it is easy:
```js
var clock;

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
```

As before, Sinon.JS provides utilities that help test frameworks reduce the boiler-plate. [Learn more about fake time](https://sinonjs.org/releases/v11.1.2/fake-timers).

https://sinonjs.org/

# Karma

## When should I use Karma?
- You want to test code in real browsers.
- You want to test code in multiple browsers (desktop, mobile, tablets, etc.).
- You want to execute your tests locally during development.
- You want to execute your tests on a continuous integration server.
- You want to execute your tests on every save.
- You love your terminal.
- You don't want your (testing) life to suck.
- You want to use Istanbul to automagically generate coverage reports.
- You want to use RequireJS for your source files.

## But I still want to use _insert testing library_
Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework. So for testing purposes you can use pretty much anything you like. There are already plugins for most of the common testing frameworks:

https://github.com/karma-runner/karma#karma
