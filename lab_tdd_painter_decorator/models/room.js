const Room = function (area, painted = false) {
    this.area = area;
    this.painted = painted;
}

Room.prototype.isPainted = function() {
    this.painted = true
}

// In js, always export a class if another class needs to import it
module.exports = Room