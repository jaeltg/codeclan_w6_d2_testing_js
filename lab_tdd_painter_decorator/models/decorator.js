const Decorator = function (paintStock) {
    this.paintStock = [];
};

Decorator.prototype.addCanPaint = function(paint) {
    this.paintStock.push(paint)
};

Decorator.prototype.calculateTotalLitres = function() {
    let totalLitres = 0;
    for (paint of this.paintStock) {
        totalLitres += paint.litres
    }
    return totalLitres
};

Decorator.prototype.hasEnoughPaint = function(room) {
    let paintAmount = this.calculateTotalLitres();
    if (paintAmount >= room.area) {
        return true
    } else {
        return false
    }
};
  
Decorator.prototype.canPaintRoom = function(room) {
    if (this.hasEnoughPaint(room) === true) {
        room.isPainted()
    }  
};

Decorator.prototype.decreasePaint = function(room) {
    // empty paint cans if they have been used to paint the room. compare the area of the room to the amount of litres of paint the decorator has in stock, decrease the amount he has in stock by the area of the room.
    let totalPaint;
    let paintAmount = this.calculateTotalLitres();
    if (room.painted === true) {
        totalPaint = paintAmount - room.area
    }
    return totalPaint
};

Decorator.prototype.removeEmptyCans = function(paint) {
    if (paint.checkIfEmpty === true) {
        let index = this.paintStock.indexOf(paint)
        this.paintStock.splice(index, 1)
    }
};
    

// In js, always export a class if another class needs to import it
module.exports = Decorator