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
let dolar69 = 69;
let dollar100 = 100;
let dollar250 = 250;
let dollar420 = 420;
let dollar500 = 500;
let dollar1000 = 1000;

// ---VARIABLES PRIZE POOL--

let btc22 = (dollar22 / p22) * 10000;
let btc25 = (dollar25 / p25) * 10000;
let btc50 = (dollar50 / p50) * 10000;
let btc69 = (dolar69 / p69) * 10000;
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

let btc = 5000;
let days = 0;

document.write('</br>'+'Prediction of pool prizes'+'</br>'+ '</br>');

loopPrizes:
while (btc < 725000) {
    days ++;
    btc += 5000;
    if (btc == 45000 && btc < 50000) {
    document.write(`<b>${days}</b> days for <b> 22 USD </b>`+ '</br>');
    }
    if (btc == 50000 && btc < 75000) {
    document.write(`<b> ${days}</b> days for <b> 25 USD </b>`+ '</br>');
    }
    if (btc == 75000 && btc < 95000) {
    document.write(`<b>${days}</b> days for <b> 50 USD </b>`+ '</br>');
    }
    if (btc == 95000 && btc < 125000) {
    document.write(`<b>${days}</b> days for <b> 69 USD </b>`+ '</br>');
    }
    if (btc == 125000 && btc < 250000) {
    document.write(`<b>${days}</b> days for <b> 100 USD </b>`+ '</br>');
    }
    if (btc == 250000 && btc < 400000) {
    document.write(`<b>${days}</b> days for <b> 250 USD </b>`+ '</br>');
    }
    if (btc == 400000 && btc < 475000) {
    document.write(`<b>${days}</b> days for <b> 420 USD </b>`+ '</br>');
    }
    if (btc == 475000 && btc < 725000) {
    document.write(`<b>${days}</b> days for <b> 500 USD </b>`+ '</br>');
    }
    if (btc == 725000) {
    document.write(`<b>${days}</b> days for <b> 1000 USD </b>`+ '</br>');
    break
    }

}


const predictor = (streamDays, points) => {
		let res = streamDays * points;
		if (res > p22 && res < p25) {
			document.write(`${res} points for <b>${dollar22} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res > p25 && res < p50) {
			document.write(`${res} points for <b>${dollar25} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res > p50 && res < p69) {
			document.write(`${res} points for <b>${dollar50} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res > p69 && res < p100) {
			document.write(`${res} points for <b>${dollar69} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res > p100 && res < p250) {
			document.write(`${res} points for <b>${dollar100} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res > p250 && res < p420) {
			document.write(`${res} points for <b>${dollar250} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res > p420 && res < p500) {
			document.write(`${res} points for <b>${dollar420} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res > p500 && res < p1000) {
			document.write(`${res} points for <b>${dollar500} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
		if (res >= p1000) {
			document.write(`${res} points for <b>${dollar1000} USD</b> in <b>${streamDays} days</b>`+'</br>');
		}
}

document.write('------------' + '</br>' + '------------' + '</br>');

predictor(23, 2500);