// let win1 = 0;
// let bet1 = 0.1;
// let $money = 0;
// let gained = 0;
// let gamble = 0;
// let maxBet1 =[];

// const predictor = (myColor, n) => {
// 		myColor = myColor.toUpperCase();
// 		let start = 0;
// 		let end = 36;

// 		for (let i = 0; i < n; i++) {
// 			let ball = Math.floor(Math.random() * (end - start + 1)) + start;			
// 			if ( ball%2 == 0 && ball != 0){
// 				let $colorBlack = "BLACK";
// 				// document.write(`Nª ${ball}<b style='color:black'> ${$colorBlack}</b></br>`);
// 				// return $colorBlack;
// 				if (myColor == $colorBlack) {
// 					document.write(`BALL:<b>${ball}</b> <b style='color:green'></br>You WIN</b>'</br>'`);
// 					win1++;
// 					gained = bet1 * 2;
// 					document.write(`Money gained: ${gained} $ </br></br></br>`);
// 					bet = 0.1;
// 					$money += gained;

// 				}
// 				if (myColor != $colorBlack) {
// 					document.write(`BALL: <b>${ball}</b><b style='color:red'></br>You LOSE</b>'</br>'`);
// 					bet1 = bet1*2;
// 					gamble += bet1;
// 					document.write(`BET: ${bet1} $ </br></br>`);

// 				} 
// 			}	

// 			if ( ball % 2 != 0){
// 				let $colorRed = "RED";
// 				// document.write(`Nª ${ball}<b style='color:red'> ${$colorRed}</b></br>`);
// 				// return $colorRed;
// 				if (myColor == $colorRed) {
// 					document.write(`BALL: <b style='color:red'>${ball}</b> <b style='color:green'></br>You WIN</b>'</br>'`);
// 					win1++;
// 					gained = bet1 * 2;
// 					document.write(`Money gained: ${gained} $ </br></br>`);
// 					bet1 = 0.1;
// 					$money += gained;
// 				}
// 				if ( myColor != $colorRed) {
// 					document.write(`BALL: <b>${ball}</b><b style='color:red'></br>You LOSE</b>'</br>'`);
// 					bet1 = bet1*2;
// 					gamble += bet;
// 					document.write(`BET: ${bet1} $ </br>`);
// 				}
// 			}
// 			if ( ball == 0) {
// 				let $colorGreen = "GREEN";
// 				// document.write(`Nª ${ball}<b style='color:green'> ${$colorGreen}</b></br>`);
// 				// return $colorGreen;
// 				if (myColor == $colorGreen) {
// 					document.write(`BALL: <b style='color:green'>${ball}</b><b style='color:green'></br>You WIN</b>'</br>'`);
// 					win1++;
// 					gained = bet1 * 35;
// 					document.write(`Money gained: ${gained} $ </br>`);
// 					// $money += gained;
// 					//--TO GREEN--//
// 					$money += gained;
// 					bet1 = 0.1;
// 				}
// 				if (myColor != $colorGreen) {
// 					document.write(`BALL: <b style='color:green'>${ball}</b><b style='color:red'></br>You LOSE</b>'</br>'`);
// 					bet1 = bet1*2;
// 					document.write(`BET: ${bet1} $ </br></br>`);
// 					gamble += bet1;
// 				}
// 			}

			
// 	}

// }

// predictor('red', 100);
// // let turns = prompt('Insert turns of roulette:')
// let averageWin = Math.round(( win1 / 100) * 100);
// let profit = $money - gamble;

// document.write(`Percentage of win: <b>${averageWin} %</b> </br>`);
// document.write(`Dollars gained: <b>${$money} U$s</b> </br>`);
// document.write(`Dollars invested: <b>${gamble} U$s</b> </br>`);
// document.write(`<b style='color:green'>Profits</b>: <b>${profit} U$s</b> </br></br>`);


let stake = 200;
let goal = 6 + stake;
let bet = 0.1;
let overbet = 0.1;
let start = 0;
let end = 36;
let turns = 0;
let win = 0;
let maxBet = [];
const colors =[]
let prediction = 'BLACK';

Roulette:
while (stake <= goal && stake > 0) {
	let color = '';
	let ball = Math.floor(Math.random() * (end - start + 1)) + start;
	colors.push(ball);
	if (ball === 0) {
		color = 'GREEN';
		if (color === prediction){
			stake += (bet * 35);
			turns ++;
			win ++;
			bet = overbet;
		}
		if ( color != prediction) {
			stake -= bet;
			turns++;
			bet = bet *2;
			maxBet.push(bet);
		}
	}

	if (ball %2 == 0) {
		color = 'RED';
		if (color === prediction){
			stake += bet;
			turns ++;
			win ++;
			bet = overbet;
		}
		if ( color != prediction) {
			stake -= bet;
			turns++;
			bet = bet *2;
			maxBet.push(bet);
		}
	}

	if (ball %2 !=0) {
		color = 'BLACK';
		if (color === prediction){
			stake += bet;
			turns ++;
			win ++;
			bet = overbet;
		}
		if ( color != prediction) {
			stake -= bet;
			turns++;
			bet = bet *2;
			maxBet.push(bet);
		}
	}
}



let $maxBet = Math.max(maxBet);
let winneable = (win / turns) * 100;
const $colors = colors.join(' - ');

rangeColors:
	for (color of colors) {
		if (color === 0){
			document.write(`<b style='color:green'>${color}</b> `)
		}
		if (color %2 == 0 && color != 0) {
			document.write(`<b style='color:black'>${color}</b> `)
		} 
		if (color %2 !=0 && color != 0) {
			document.write(`<b style='color:red'>${color}</b> `)
		}
	}


document.write('</br> ------------------ </br></br>')


const max = (arr) => {
	let max = arr[0];
	for ( let i = 0; i < arr.length; i++) {
		if (max < arr[i])
		max = arr[i]
	}
	return max;
}

$maxBet = max(maxBet);

colorBet:
	for (bet of maxBet) {
		if (bet > 0.2) {
			document.write(`<b style='color:red'>${bet}</b> `);
		} else {
			document.write(`<b style='color:green'>${bet}</b> `);
		}
	}

maxBet = maxBet.join(' ');


let time = (turns * 10) / 60;

document.write(`</br><b style='color:green'>${stake}</b> u$s in stake </br>`);
document.write(`<b>${turns}</b> TURNS to profit goal </br>`);
document.write(`<b style='color:red'>${$maxBet}</b>: Bet max </br>`);
document.write(`Percentage of Win: <b style='color:green'>${winneable}%</b></br>`)
document.write(`<b>${time} min</b> to earn money</br></br>`);


let resultWiinner = 0;
let n = 10;
for (let i = 0; i < n; i++) {
	let stake = 200;
	let goal = 6 + stake;
	let bet = 0.025;
	let overbet = 0.025;
	let start = 0;
	let end = 36;
	let turns = 0;
	let win = 0;
	let maxBet = [];
	let prediction = 'BLACK';
	while (stake <= goal && stake > 0) {
		let color = '';
		let ball = Math.floor(Math.random() * (end - start + 1)) + start;
		if (ball === 0) {
			color = 'GREEN';
			if (color === prediction){
				stake += bet * 35;
				turns ++;
				win ++;
				bet = overbet;
			}
			if ( color != prediction) {
				stake -= bet;
				turns++;
				bet = bet *2;
				maxBet.push(bet);
			}
		}
	
		if (ball %2 == 0) {
			color = 'RED';
			if (color === prediction){
				stake += bet;
				turns ++;
				win ++;
				bet = overbet;
			}
			if ( color != prediction) {
				stake -= bet;
				turns++;
				bet = bet *2;
				maxBet.push(bet);
			}
		}
	
		if (ball %2 !=0) {
			color = 'BLACK';
			if (color === prediction){
				stake += bet;
				turns ++;
				win ++;
				bet = overbet;
			}
			if ( color != prediction) {
				stake -= bet;
				turns++;
				bet = bet *2;
				maxBet.push(bet);
			}
		}
		
	}
	let winneable = (win / turns) * 100;
	document.write(`% of Win: ${winneable}</br>`);
	resultWiinner += winneable / n;
}

document.write(`</br>Average Win: <b>${resultWiinner}%</b></br></br>`);

document.write(`----Force Negative Racha----</br></br>`);
let $bolsa = 200;
let apuesta = 0.1;
let rachaNegativa = 0;

while ($bolsa > apuesta) {
	$bolsa = $bolsa - apuesta;
	apuesta = apuesta * 2;
	rachaNegativa++;
	document.write(`Stack: ${$bolsa} </br>`);
	document.write(`Racha Negativa: <b>${rachaNegativa}</b></br>`);
	document.write(`Bet: ${apuesta} </br></br>`);
	
}

document.write('</br></br>----------ROULETE ESTRATEGIA TOP ----------</br></br>');

let $$stake = 30;
let $$goal = 6 + stake;
let $$bet = 1.3;
let $$profits = .3846153846153846;
let $$start = 0;
let $$end = 36;
let $$turns = 0;
let $$win = 0;
let $$prediction = [0, 1, 2, 3, 4, 7, 11, 12, 13, 14, 17, 18, 19, 20, 24, 27, 25, 26, 29, 32, 28, 31, 33, 36, 34, 35];

while ($$stake <= $$goal && $$stake >= 0) {
	let ball = Math.floor(Math.random() * (end - start + 1)) + start;
	if ($$prediction.includes(ball)) {
		$$win++;
		$$turns++;
		$$stake += ($$bet * $$profits);
	} else {
		$$turns++;
		$$stake -= $$bet;
	}
}

let porcetajeGanador = ($$win / $$turns) * 100;
let girosPerdedores = $$turns - $$win;

document.write(`Giros Totales:${turns}</br>`);
document.write(`Giros ganadores:${win}</br>`);
document.write(`Giros perdedores:${girosPerdedores}</br>`);
document.write(`% ganador:${porcetajeGanador}%</br>`);
document.write(`Stake total:${$$stake}</br>`);


document.write('</br> ------------------ </br></br>')
