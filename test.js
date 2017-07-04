const b2s = require('./index');
const assert = require('assert');

function describe(label, fn) {
    console.log(label);
    fn();
    console.log('\n');
}

function it(label, fn) {
    console.log('  ' + label);

    fn();
    console.log('    ok');
}

describe('encode', function () {
    it('should encode a to ba', function () {
        assert.equal(b2s.encode('a'), 'ba');
    });

    it('should encode ab to babe', function () {
        assert.equal(b2s.encode('ab'), 'babe');
    });

    it('should add a dash after two syllables', function () {
        assert.equal(b2s.encode('abc'), 'babe-bi');
    });

    it('should throw on none base64 characters', function () {
        assert.throws(function () {
            b2s.encode('ä');
        });
    });
});

describe('decode', function() {
    it('should decode ba to a', function () {
        assert.equal(b2s.decode('ba'), 'a');
    });

    it('should decode babe to ab', function () {
        assert.equal(b2s.decode('babe'), 'ab');
    });

    it('should decode babebi to abc', function () {
        assert.equal(b2s.decode('babebi'), 'abc');
    });

    it('should ignore whitespace', function () {
        assert.equal(b2s.decode('babe bi'), 'abc');
    });

    it('should ignore dashes', function () {
        assert.equal(b2s.decode('babe-bi'), 'abc');
    });
});

describe('inversion', function () {
    it('should return the identity on inversion', function () {
        assert.equal(b2s.decode(b2s.encode('fo0Bar42')), 'fo0Bar42');
    });
});
