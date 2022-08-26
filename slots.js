const points = '';
let btc22 = Math.round((22 / 45000) * 10000);
let btc25 = (25 / 50000) * 10000;
let btc50 = (50 / 75000) * 10000;
let btc69 = (69 / 95000) * 10000;
let btc100 = (100 / 125000) * 10000;
let btc250 = (250 / 250000) * 10000;
let btc420 = (420 / 400000) * 10000;
let btc500 = (500 / 475000) * 10000;
let btc1000 = (1000 / 725000) * 10000;

document.write(btc22 + '</br>');

let profitsBtc =[];
profitsBtc.push(btc22,btc25,btc50,btc69,btc100,btc250,btc500,btc1000);

profitsBtc.sort();


document.write(profitsBtc+ '</br>');

for (let i = 0; i < profitsBtc.length; i++) {
    document.write(profitsBtc[i]);
}