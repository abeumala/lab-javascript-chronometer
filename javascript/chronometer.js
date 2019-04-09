// Constructor

const milisecond = 1000;
let counter = 0;

function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
    this.intervalId = setInterval(() => {
        this.currentTime += 1;
        this.setTime();
    }, milisecond);
}

Chronometer.prototype.setMinutes = function() {
    return Math.floor(this.currentTime / 60);
}

Chronometer.prototype.setSeconds = function() {
    //return Math.floor(this.currentTime - Math.floor(this.currentTime / 60) * 60);  :^)
    return this.currentTime % 60;
}

Chronometer.prototype.setMilliseconds = function() {
    return this.currentTime * 1000;
}

Chronometer.prototype.twoDigitsNumber = function(num) {    
    if (num.toString().length === 2) {
        return num.toString();
    } else if (num.toString().length <= 1) {
        return "0" + num.toString();
    } else return `You got something wrong`;
}

Chronometer.prototype.setTime = function() {
    let minutes = this.twoDigitsNumber(this.setMinutes());
    let seconds = this.twoDigitsNumber(this.setSeconds());

    return [minutes, seconds]
}

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
}

Chronometer.prototype.resetClick = function() {
    this.currentTime = 0;
}

