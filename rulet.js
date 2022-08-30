// let win = 0;
// let bet = 0.05;
// let $money = 0;
// let gained = 0;
// let gamble = 0;
// let maxBet =[];

// const predictor = (myColor, n) => {
// 		myColor = myColor.toUpperCase();
// 		let start = 0;
// 		let end = 14;

// 		for (let i = 0; i < n; i++) {
// 			let ball = Math.floor(Math.random() * (end - start + 1)) + start;			
// 			if ( ball%2 == 0 && ball != 0){
// 				let $colorBlack = "BLACK";
// 				// document.write(`Nª ${ball}<b style='color:black'> ${$colorBlack}</b></br>`);
// 				// return $colorBlack;
// 				if (myColor == $colorBlack) {
// 					document.write(`BALL:<b>${ball}</b> <b style='color:green'></br>You WIN</b>'</br>'`);
// 					win++;
// 					gained = bet * 2;
// 					document.write(`Money gained: ${gained} $ </br></br></br>`);
// 					bet = 0.05;
// 					$money += gained;

// 				}
// 				if (myColor != $colorBlack) {
// 					document.write(`BALL: <b>${ball}</b><b style='color:red'></br>You LOSE</b>'</br>'`);
// 					bet = bet*2;
// 					gamble += bet;
// 					document.write(`BET: ${bet} $ </br></br>`);

// 				} 
// 			}	

// 			if ( ball % 2 != 0){
// 				let $colorRed = "RED";
// 				// document.write(`Nª ${ball}<b style='color:red'> ${$colorRed}</b></br>`);
// 				// return $colorRed;
// 				if (myColor == $colorRed) {
// 					document.write(`BALL: <b style='color:red'>${ball}</b> <b style='color:green'></br>You WIN</b>'</br>'`);
// 					win++;
// 					gained = bet * 2;
// 					document.write(`Money gained: ${gained} $ </br></br>`);
// 					bet = 0.05;
// 					$money += gained;
// 				}
// 				if ( myColor != $colorRed) {
// 					document.write(`BALL: <b>${ball}</b><b style='color:red'></br>You LOSE</b>'</br>'`);
// 					bet = bet*2;
// 					gamble += bet;
// 					document.write(`BET: ${bet} $ </br></br>`);
// 				}
// 			}
// 			if ( ball == 0) {
// 				let $colorGreen = "GREEN";
// 				// document.write(`Nª ${ball}<b style='color:green'> ${$colorGreen}</b></br>`);
// 				// return $colorGreen;
// 				if (myColor == $colorGreen) {
// 					document.write(`BALL: <b style='color:green'>${ball}</b><b style='color:green'></br>You WIN</b>'</br>'`);
// 					win++;
// 					gained = bet * 10;
// 					document.write(`Money gained: ${gained} $ </br></br>`);
// 					// $money += gained;
// 					//--TO GREEN--//
// 					$money += gained;
// 					bet = 0.05;
// 				}
// 				if (myColor != $colorGreen) {
// 					document.write(`BALL: <b style='color:green'>${ball}</b><b style='color:red'></br>You LOSE</b>'</br>'`);
// 					bet = bet*2;
// 					document.write(`BET: ${bet} $ </br></br>`);
// 					gamble += bet;
// 				}
// 			}

			
// 	}

// }

// predictor('red', 100);
// // let turns = prompt('Insert turns of roulette:')
// let averageWin = Math.round(( win / 100) * 100);
// let profit = $money - gamble;

// document.write(`Percentage of win: <b>${averageWin} %</b> </br>`);
// document.write(`Dollars gained: <b>${$money} U$s</b> </br>`);
// document.write(`Dollars invested: <b>${gamble} U$s</b> </br>`);
// document.write(`<b style='color:green'>Profits</b>: <b>${profit} U$s</b> </br>`);


let stake = 105;
let goal = 7 + stake;
let bet = 0.05;
let start = 0;
let end = 36;
let turns = 0;
let win = 0;
let maxBet = [];
let prediction = 'RED';

Roulette:
while (stake <= goal && stake > 0) {
	let color = '';
	let ball = Math.floor(Math.random() * (end - start + 1)) + start;
	if (ball == 0) {
		color = 'GREEN';
		if (color === prediction){
			stake += bet;
			turns ++;
			win ++;
			bet = 0.05;
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
			bet = 0.05;
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
			bet = 0.05;
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

const max = (arr) => {
	let max = arr[0];
	for ( let i = 0; i < arr.length; i++) {
		if (max < arr[i])
		max = arr[i]
	}
	return max;
}

$maxBet = max(maxBet);
let time = (turns * 10) / 60;

document.write(`<b style='color:green'>${stake}</b> u$s in stake </br>`);
document.write(`<b>${turns}</b> TURNS to profit goal </br>`);
document.write(`<b style='color:red'>${$maxBet}</b>: Bet max </br>`);
document.write(`Percentage of Win: <b style='color:green'>${winneable}%</b></br>`)
document.write(`<b>${time} min</b> to earn money</br></br>`);


let resultWiinner = 0;

for (let i = 0; i < 20; i++) {
	let stake = 105;
	let goal = 7 + stake;
	let bet = 0.05;
	let start = 0;
	let end = 36;
	let turns = 0;
	let win = 0;
	let maxBet = [];
	let prediction = 'RED';
	while (stake <= goal && stake > 0) {
		let color = '';
		let ball = Math.floor(Math.random() * (end - start + 1)) + start;
		if (ball == 0) {
			color = 'GREEN';
			if (color === prediction){
				stake += bet;
				turns ++;
				win ++;
				bet = 0.05;
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
				bet = 0.05;
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
				bet = 0.05;
			}
			if ( color != prediction) {
				stake -= bet;
				turns++;
				bet = bet *2;
				maxBet.push(bet);
			}
		}
	}
	let winneable = win / turns;
	let predictionWinner = (winneable / 10) * 1000;
	document.write(`% of Win: ${predictionWinner}</br>`);
	let resultWiinner =+ predictionWinner;
}

document.write(`Average Win: <b>${resultWiinner}</b></br></br>`);

document.write(`----Force Negative Racha----</br></br>`);
let $bolsa = 105;
let apuesta = 0.05;
let rachaNegativa = 0;

while ($bolsa > apuesta) {
	$bolsa = $bolsa - apuesta;
	apuesta = apuesta * 2;
	rachaNegativa++;
	document.write(`Stack: ${$bolsa} </br>`);
	document.write(`Racha Negativa: <b>${rachaNegativa}</b></br>`);
	document.write(`Bet: ${apuesta} </br></br>`);
	
}