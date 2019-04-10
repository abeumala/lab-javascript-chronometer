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
    }, 10);
}

Chronometer.prototype.setMinutes = function() {
    return Math.floor(this.currentTime / (60 * 100));
}

Chronometer.prototype.setSeconds = function() {
    //return Math.floor(this.currentTime - Math.floor(this.currentTime / 60) * 60);  :^)
    return ((this.currentTime / 100) % 60);
}

Chronometer.prototype.setMilliseconds = function() {
    return this.currentTime;
}

Chronometer.prototype.twoDigitsNumber = function(num) {    
    // console.log(num);
    if (num.toString().length === 2) {
        return num.toString();
    } else if (num.toString().length <= 1) {
        let numToString = "0" + num.toString();
        // console.log(numToString);
        return numToString
    } else return `You got something wrong`;
}


Chronometer.prototype.setTime = function() {
    let minutes = this.twoDigitsNumber(this.setMinutes());
    let seconds = this.twoDigitsNumber(this.setSeconds());
    let milisec = this.twoDigitsNumber(this.setMilliseconds());

    return [minutes, seconds, milisec];
}

Chronometer.prototype.stopClick = function() {
    clearInterval(this.intervalId);
}

Chronometer.prototype.resetClick = function() {
    this.currentTime = 0;
}

