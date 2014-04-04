/**
 * Created by ichetandhembre on 3/4/14.
 */

'use strict';

var scissor = require('../');
var test = require('tap').test;
test('Test', function (t) {
    t.deepEqual(scissor.split({}), [], 'if 1st argument is not string then return []');
    t.deepEqual(scissor.split("demo"), ['demo'], 'if limit is not provided then string will return as it is');
    t.deepEqual(scissor.split('demo', 5), ['demo'], 'if limit is larger than str lenght then it will return string as it is');
    t.deepEqual(scissor.split('Lorem Ipsum', 5), ['Lorem', 'Ipsum'], 'split string on space');
    t.deepEqual(scissor.split('Lorem Ipsum', 7), ['Lorem', 'Ipsum'], 'split string on space');
    t.deepEqual(scissor.split('Lorem.Ipsum', 7), ['Lorem.', 'Ipsum'], 'split string on .');
    t.deepEqual(scissor.split('Lorem.. Ipsum', 8), ['Lorem..', 'Ipsum'], 'split string on space');
    t.deepEqual(scissor.split('demo Lorem..Ipsum', 11), [ 'demo Lorem-', '-..Ipsum' ], 'split string on space');
    t.deepEqual(scissor.split('demo Lorem..Ipsum!! demo', 11), [ 'demo Lorem-', '-..Ipsum!!', 'demo' ], 'split string on space');
    t.deepEqual(scissor.split('demo Lorem..Ipsum!! demo', 5), [ 'demo', 'Lore-', '-m..', 'Ipsu-', '-m!!', 'demo' ], 'split string on space');
    t.end();
});

