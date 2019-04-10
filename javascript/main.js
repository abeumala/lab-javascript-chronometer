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
    }, 10);
}

function stop() {
	clearInterval(intervalId);
}

function printMinutes() {
	let time = chronometer.setTime();
	minUni.innerHTML = time[0].toString().charAt(1);
	minDec.innerHTML = time[0].toString().charAt(0);
	// console.log('time:',time.toString());
}

function printSeconds() {
	let time = chronometer.setTime();
	secUni.innerHTML = time[1].toString().charAt(1);
	secDec.innerHTML = time[1].toString().charAt(0);
}

function printMilliseconds() {
	let time = chronometer.setTime()
	milUni.innerHTML = time[2].toString().charAt(1);
	milDec.innerHTML = time[2].toString().charAt(0);

}

function printSplit() {

}

// function clearSplits() {
// 	chronometer.currentTime = 0;
// }

function setStopBtn() {
		btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
		btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
		btnLeft.innerHTML = 'START';
}

function setResetBtn() {
		btnRight.innerHTML = 'RESET';
}

function resetChrono() {
	chronometer.currentTime = 0;
}

function startStop () { 
	// let CurrentClass = btnLeft.getAttribute('class');
	if (btnLeft.innerHTML === 'START'/* currentClass === 'btn start'*/) {
		btnLeft.setAttribute('class', 'btn-stop');
		setStopBtn();
		printTime();
		chronometer.startClick();
	} else {
		btnLeft.setAttribute('class', 'btn-start');
		setStartBtn();
		stop();
		chronometer.stopClick();
		setResetBtn();
		btnRight.setAttribute('class', 'btn-reset');
	}
}

function resetSplit () {
	// let currentClass = btnRight.getAttribute('class');
	if (btnRight.innerHTML === 'RESET' /* currentClass === 'btn reset' */) {
		btnRight.setAttribute('class', 'btn-split'); 
		setSplitBtn();	
		// chronometer.resetClick()
		resetChrono();
	} else {
		btnRight.setAttribute('class', 'btn-reset');
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
