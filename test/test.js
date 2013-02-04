var assert = require("assert");
var Instaview = require('../');
var fs = require('fs');

describe('basic functionality', function() {
    it('should export an object named Instaview', function() {
        assert.equal(!!Instaview, true);
    });
});
