var assert = require("assert");
var InstaView = require('../');
var fs = require('fs');

describe('basic functionality', function() {
    it('should export an object named InstaView', function() {
        assert.equal(!!InstaView, true);
    });
    ['Fingerprint', 'Earth', 'Ethiopia'].forEach(function(title) {
        it('should properly render '+title, function() {
            var mw = fs.readFileSync('test/'+title+'.mw', 'utf-8');
            var ref = fs.readFileSync('test/'+title+'.html', 'utf-8');
            var rendered = InstaView.convert(mw);
            assert.equal(rendered, ref);
        });
    });
});
