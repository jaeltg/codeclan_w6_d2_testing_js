const Paint = function (litres) {
   this.litres = litres;
}

Paint.prototype.checkIfEmpty = function() {
    if (this.litres === 0){
        return true
    } else {
        return false
    }
};

Paint.prototype.emptyLitres = function() {
   this.litres = 0;
};

// In js, always export a class if another class needs to import it
module.exports = Paint