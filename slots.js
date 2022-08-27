// ---Program for predict points of slots streaming and win profits in cash only farming hours--


const points = '';

//----MOST COEFICIENTE IS BETTER PROFIT FOR THE POINS

let btc22 = (22 / 45000) * 10000;
let btc25 = (25 / 50000) * 10000;
let btc50 = (50 / 75000) * 10000;
let btc69 = (69 / 95000) * 10000;
let btc100 = (100 / 125000) * 10000;
let btc250 = (250 / 250000) * 10000;
let btc420 = (420 / 400000) * 10000;
let btc500 = (500 / 475000) * 10000;
let btc1000 = (1000 / 725000) * 10000;

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

document.write(profitsBtc[0]);

for ( let i = 0; i < profitsBtc.length; i++) {
    document.write(`${i+1}, Coeficient Prize: <b>${profitsBtc.Bitcoin22[i][0]}</b>`+ '</br>');
}

let btc = 5000;
let days = 0;


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