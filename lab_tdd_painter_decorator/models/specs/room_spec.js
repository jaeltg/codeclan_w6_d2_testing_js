const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {

    let room;

    beforeEach(function () {
        room = new Room(100);
    });

    it('should have a area', function () {
        const result = room.area;
        assert.strictEqual(result, 100)
    });

    it('should have a check for painted', function () {
        const result = room.painted;
        assert.strictEqual(result, false);
    });

    
    describe('painted function', function () {
        it('can be painted', function () {
            const result = room.isPainted()
            assert.strictEqual(room.painted, true);
        });
    });

});