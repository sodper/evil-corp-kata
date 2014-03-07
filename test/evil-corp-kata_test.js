'use strict';

var evil = require('../lib/evil-corp-kata.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['censorString'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no input': function(test) {
    test.expect(1);
    test.equal(evil.censorString(), '', 'should return empty string.');
    test.done();
  },
  'input with blacklisted word': function(test) {
    test.expect(1);
    test.equal(evil.censorString('You are a nice person'), 'You are a XXXX person', 'should censor word');
    test.done();
  },
  'input with no blacklisted word': function(test) {
    test.expect(1);
    test.equal(evil.censorString('Hello!'), 'Hello!', 'should return same string');
    test.done();
  },
  'input with multiple blacklisted words': function(test) {
    test.expect(1);
    test.equal(evil.censorString('Such a nice day with a bright sun, makes me happy'), 'Such a XXXX day with a bright XXX, makes me XXXXX', 'should censor each word');
    test.done();
  },
  'input with conjugation of blacklisted word': function(test) {
    test.expect(1);
    test.equal(evil.censorString('You are so friendly!'), 'You are so XXXXXXXXX', 'should censor whole word');
    test.done();
  },
  'input with unwanted words': function(test) {
    test.expect(1);
    test.equal(evil.censorString('Objection is bad, a better thing to do, is to agree.'), 'Thoughtcrime is ungood, a gooder thing to do, is to crimestop.', 'should replace all unwanted words');
    test.done();
  },
};
