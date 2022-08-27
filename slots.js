// ---Program for predict points of slots streaming and win profits in cash only farming hours--

//----MOST COEFICIENTE IS BETTER PROFIT FOR THE POINS


// --CONST POINTS FOR POOL PRIZES--

let p22 = 45000;
let p25 = 50000;
let p50 = 75000;
let p69 = 95000;
let p100 = 125000;
let p250 = 250000;
let p420 = 400000;
let p500 = 475000;
let p1000 = 725000;

// --CONST DOLLAR PRIZES--

let dollar22 = 22;
let dollar25 = 25;
let dollar50 = 50;
let dollar69 = 69;
let dollar100 = 100;
let dollar250 = 250;
let dollar420 = 420;
let dollar500 = 500;
let dollar1000 = 1000;

// ---VARIABLES PRIZE POOL--

let btc22 = (dollar22 / p22) * 10000;
let btc25 = (dollar25 / p25) * 10000;
let btc50 = (dollar50 / p50) * 10000;
let btc69 = (dollar69 / p69) * 10000;
let btc100 = (dollar100 / p100) * 10000;
let btc250 = (dollar250 / p250) * 10000;
let btc420 = (dollar420 / p420) * 10000;
let btc500 = (dollar500 / p500) * 10000;
let btc1000 = (dollar1000 / p1000) * 10000;

// ------------------- //

let profitsBtc = [
	['Bitcoin22', btc22],
	['Bitcoin25', btc25],
	['Bitcoin50', btc50],
	['Bitcoin69', btc69],
	['Bitcoin100', btc100],
	['Bitcoin420', btc420],
	['Bitcoin500', btc500],
	['Bitcoin1000', btc1000]
]

for ( let i = 0; i < profitsBtc.length; i++) {
    document.write(`${i+1}, Coeficient Prize ${profitsBtc[i][0]} : <b>${profitsBtc[i][1]}</b>`+ '</br>');
}

document.write('------------' + '</br>' + '------------' + '</br>');

document.write('</br>'+'Prediction of pool prizes'+'</br>'+ '</br>');

//---CONST 'streamDays' IS THE CUANTY OF DAYS OF STREAMING AVERAGE AND 'points' IS THE AVERAGE GAINED PER STREAM

const predictor = (streamDays, points) => {

		let res = streamDays * points;

		if (res > p22 && res < p25) {
			document.write(`<b style='color:green'>${res}</b> points for <b>${dollar22} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p25 && res < p50) {
			document.write(`<b style='color:green'>${res}</b> points for <b>${dollar25} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p50 && res < p69) {
			document.write(`<b style='color:green'>${res}</b> points for <b>${dollar50} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p69 && res < p100) {
			document.write(`<b style='color:green'>${res}</b> points for <b>${dollar69} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p100 && res < p250) {
			document.write(`<b style='color:green'>${res}</b> points for <b>${dollar100} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p250 && res < p420) {
			document.write(`<b style='color:green'>${res}</b> points for <b>${dollar250} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p420 && res < p500) {
			document.write(`<b style='color:green'>${res}</b> points for <b>${dollar420} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p500 && res < p1000) {
			document.write(`<b style='color:green'>${res}</b> points for <b>${dollar500} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p1000) {
			document.write(`${res} points for <b>${dollar1000} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
}

document.write('------------' + '</br>' + '------------' + '</br>');

predictor(22, 4300);