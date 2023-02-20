class GuessingGame {
    constructor() {}

    currentRange = [];
    setRange(min, max) {
        for(let i = min; i <= max; i++) {
            this.currentRange.push(i);
        }
    }

    calcMid() {
        return Math.floor(this.currentRange.length / 2);
    }

    guess() {
        const mid = this.calcMid();
        return this.currentRange[mid];
    }

    lower() {
        const mid =  this.calcMid();
        this.currentRange = this.currentRange.slice(0, mid + 1);
    }

    greater() {
        const mid =  this.calcMid();
        this.currentRange = this.currentRange.slice(mid, this.currentRange.length);
    }
}

module.exports = GuessingGame;
