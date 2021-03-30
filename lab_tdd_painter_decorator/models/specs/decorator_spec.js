const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function () {

    let decorator;
    let room;
    let paint;

    beforeEach(function () {
        decorator = new Decorator();
        room = new Room(100);
        paint1 = new Paint(100)
        paint2 = new Paint(50)
    });

    it('check paint stock', function () {
        const result = decorator.paintStock;
        assert.deepStrictEqual(result, [])
    });

    it(' can add paint can to stock', function () {
        decorator.addCanPaint(paint1);
        assert.deepStrictEqual(decorator.paintStock, [paint1])
    });

    it('calculate total litres of paint', function () {
        decorator.addCanPaint(paint1);
        decorator.addCanPaint(paint2);
        result = decorator.calculateTotalLitres();
        assert.strictEqual(result, 150)
    });

    it('can paint room', function () {
        decorator.addCanPaint(paint1);
        decorator.addCanPaint(paint2);
        result = decorator.hasEnoughPaint(room)
        assert.strictEqual(result, true)
    });

    it('will paint room', function () {
        decorator.addCanPaint(paint1);
        decorator.addCanPaint(paint2);
        decorator.canPaintRoom(room)
        assert.strictEqual(room.painted, true)
    });

    it('will decrease paint in stock', function () {
        decorator.addCanPaint(paint1);
        decorator.addCanPaint(paint2);
        room.isPainted();
        result = decorator.decreasePaint(room);
        assert.strictEqual(result, 50)
    });

    it('will remove empty cans from stock', function () {
        decorator.addCanPaint(paint1);
        decorator.addCanPaint(paint2);
        paint1.emptyLitres();
        decorator.removeEmptyCans(paint1)
        assert.strictEqual(decorator.paintStock, [paint2])
    });

});