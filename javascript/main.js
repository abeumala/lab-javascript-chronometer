var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var intervalId	= 0;

function printTime() {
	intervalId = setInterval(() => {
        printMinutes();
        printSeconds();
        printMilliseconds();
    }, 1000);
}

function stop() {
	clearInterval(intervalId)
}

function printMinutes() {
	let time = chronometer.setTime();
	minUni.innerHTML = time[0].toString().charAt(1);
	minDec.innerHTML = time[0].toString().charAt(0);
	console.log(time.toString());
}

function printSeconds() {
	let time = chronometer.setTime();
	secUni.innerHTML = time[1].toString().charAt(1);
	secDec.innerHTML = time[1].toString().charAt(0);
	console.log(time.toString());
}

function printMilliseconds() {
	let miliseconds = chronometer.setTime()
	milUni.innerHTML = miliseconds.toString().charAt(1);
	milDec.innerHTML = miliseconds.toString().charAt(0);

}

function printSplit() {

}

function clearSplits() {
	chronometer.currentTime = 0;
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

function startStop () { 
	// let CurrentClass = btnLeft.getAttribute('class');
	if (btnLeft.innerHTML === 'START'/* currentClass === 'btn start'*/) {
		btnLeft.setAttribute('class', 'btn stop');
		btnLeft.innerHTML = 'STOP';
		printTime();
		chronometer.startClick();
	} else {
		btnLeft.setAttribute('class', 'btn start');
		btnLeft.innerHTML = 'START';
		stop();
		chronometer.stopClick();
	}
}

function resetSplit () {
	// let currentClass = btnRight.getAttribute('class');
	if (btnRight.innerHTML === 'RESET' /* currentClass === 'btn reset' */) {
		btnRight.setAttribute('class', 'btn split');
		btnRight.innerHTML = 'SPLIT';
		clearSplits();
		chronometer.resetClick();
	} else {
		btnRight.setAttribute('class', 'btn reset');
		btnRight.innerHTML = 'RESET';
	}
}



// function backgroundBtn() {
// 	btnRight.style.background = 'blue';
// }

// function resetBtnStyles() {
//   btnLeft.style.background =  'green';
// }

// Start/Stop Button
btnLeft.addEventListener('click', startStop); // first parameter is the event i want to run, second the function i want to execute onClick
	

// Reset/Split Button
btnRight.addEventListener('click', resetSplit);


// btnLeft.addEventListener('mouseover', backgroundBtn);
// btnLeft.addEventListener('mouseover', resetBtnStyles);
