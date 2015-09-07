var test = require('tape');

require('../');

test('file', function(t) {
    t.plan(1);

    t.equal(
        require('./someDir/someFile'),
        'majigger',
        'Resolves correctly'
    );
});

test('directory', function(t) {
    t.plan(1);

    t.equal(
        require('./someDir/deeperDir'),
        'majigger',
        'Resolves correctly'
    );
});

test('legit modules', function(t) {
    t.plan(1);

    t.equal(
        require('tape'),
        test,
        'Resolves correctly'
    );
});