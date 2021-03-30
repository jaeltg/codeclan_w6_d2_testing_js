const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function () {

    let paint;

    beforeEach(function () {
        paint = new Paint(100);
    });

    it('should have litres', function () {
        const result = paint.litres;
        assert.strictEqual(result, 100)
    });


    describe('is empty', function () {
        it('is empty', function () {
            const result = paint.checkIfEmpty()
            assert.strictEqual(result, false);
        });
    });

    describe('can be emptied', function () {
        it('can be emptied', function () {
            paint.emptyLitres()
            assert.strictEqual(paint.litres, 0);
        });
    });
   
});