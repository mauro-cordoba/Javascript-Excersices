
// const roulette = (n) => {
// 		for (let i = 0; i < n; i++) {
// 			let start = 0;
// 			let end = 14;
// 			ball = Math.floor(Math.random() * (end - start + 1)) + start;
// 			if ( ball % 2 == 0 && ball != 0){
// 				let $colorBlack = "BLACK";
// 				// document.write(`Nº${ball}<b> ${$colorBlack}</b></br></br>`);
// 				return $colorBlack;
// 			}
// 			if ( ball % 2 != 0){
// 				let $colorRed = "RED";
// 				// document.write(`Nª ${ball}<b style='color:red'> ${$colorRed}</b></br></br>`);
// 				return $colorRed;
// 			}
// 			if ( ball == 0) {
// 				let $colorGreen = "GREEN";
// 				// document.write(`Nª ${ball}<b style='color:green'> ${$colorGreen}</b></br></br>`);
// 				return $colorGreen;
// 			}
// 		}
// }

// myColor = prompt('Insert a COLOR')

let win = 0;
let bet = 0.1;
let $money = 0;
let $dollarBet = 0;

const predictor = (myColor, n) => {
		myColor = myColor.toUpperCase();
		let winner = true;
		let start = 0;
		let end = 36;
		for (let i = 0; i < n; i++) {
			let ball = Math.floor(Math.random() * (end - start + 1)) + start;			
			if ( ball%2 == 0 && ball != 0){
				let $colorBlack = "BLACK";
				// document.write(`Nª ${ball}<b style='color:black'> ${$colorBlack}</b></br>`);
				// return $colorBlack;
				if (myColor == $colorBlack) {
					document.write(`BALL: ${ball}<b style='color:#5787dc'></br>You WIN</b>'</br>'`);
					win++;
					$money += .1;
					bet = 0.1;
					document.write(`Money gained: ${$money} $ </br></br></br>`);
				}
				if (myColor != $colorBlack) {
					winner = false;
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br>'`);
					bet = bet*2;
					$dollarBet += bet;
					document.write(`BET: ${$dollarBet} $ </br></br></br>`);
				} 
			}	

			if ( ball % 2 != 0){
				let $colorRed = "RED";
				// document.write(`Nª ${ball}<b style='color:red'> ${$colorRed}</b></br>`);
				// return $colorRed;
				if (myColor == $colorRed) {
					document.write(`BALL: ${ball}<b style='color:#5787dc'></br>You WIN</b>'</br>'`);
					win++;
					$money += .1;
					bet = 0.1;
					document.write(`Money gained: ${$money} $ </br></br></br>`);
				}
				if ( myColor != $colorRed) {
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br>'`);
					bet = bet*2;
					$dollarBet += bet;
					document.write(`BET: ${$dollarBet} $ </br></br></br>`);
				}
			}
			if ( ball == 0) {
				let $colorGreen = "GREEN";
				// document.write(`Nª ${ball}<b style='color:green'> ${$colorGreen}</b></br>`);
				// return $colorGreen;
				if (myColor == $colorGreen) {
					document.write(`BALL: ${ball}<b style='color:#5787dc'></br>You WIN</b>'</br>'`);
					win++;
					bet = 0.1;
					$money += .1;
					document.write(`Money gained: ${$money} $ </br></br>`);
				}
				if (myColor != $colorGreen) {
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br>'`);
					bet = bet*2;
					$dollarBet += bet;
					document.write(`BET: ${$dollarBet} $ </br></br>`);
				}
			}

			
	}

}

predictor('red', 5);
// let turns = prompt('Insert turns of roulette:')
let averageWin = Math.round(( win / 5) * 100);

document.write(`Percentage of win: ${averageWin} % </br>`);
document.write(`Dollars gained: ${$money} U$s </br>`);


