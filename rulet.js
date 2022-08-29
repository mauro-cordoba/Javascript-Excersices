
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
let bet = 0.05;
let $money = 0;
let gained = 0;
let gamble = 0;

const predictor = (myColor, n) => {
		myColor = myColor.toUpperCase();
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
					gained = bet * 2;
					document.write(`Money gained: ${gained} $ </br></br></br>`);
					bet = 0.05;
					$money += gained;

				}
				if (myColor != $colorBlack) {
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br>'`);
					bet = bet*2;
					gamble += bet;
					document.write(`BET: ${bet} $ </br></br>`);
				} 
			}	

			if ( ball % 2 != 0){
				let $colorRed = "RED";
				// document.write(`Nª ${ball}<b style='color:red'> ${$colorRed}</b></br>`);
				// return $colorRed;
				if (myColor == $colorRed) {
					document.write(`BALL: ${ball}<b style='color:#5787dc'></br>You WIN</b>'</br>'`);
					win++;
					gained = bet * 2;
					document.write(`Money gained: ${gained} $ </br></br>`);
					bet = 0.05;
					$money += gained;
				}
				if ( myColor != $colorRed) {
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br>'`);
					bet = bet*2;
					gamble += bet;
					document.write(`BET: ${bet} $ </br></br>`);
				}
			}
			if ( ball == 0) {
				let $colorGreen = "GREEN";
				// document.write(`Nª ${ball}<b style='color:green'> ${$colorGreen}</b></br>`);
				// return $colorGreen;
				if (myColor == $colorGreen) {
					document.write(`BALL: ${ball}<b style='color:#5787dc'></br>You WIN</b>'</br>'`);
					win++;
					gained = bet * 10;
					document.write(`Money gained: ${gained} $ </br></br>`);
					// $money += gained;
					//--TO GREEN--//
					$money += gained;
					bet = 0.05;
				}
				if (myColor != $colorGreen) {
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br>'`);
					bet = bet*2;
					document.write(`BET: ${bet} $ </br></br>`);
				}
			}

			
	}

}

predictor('red', 12);
// let turns = prompt('Insert turns of roulette:')
let averageWin = Math.round(( win / 12) * 100);
let profit = $money - gamble;

document.write(`Percentage of win: <b>${averageWin} %</b> </br>`);
document.write(`Dollars gained: <b>${$money} U$s</b> </br>`);
document.write(`Profits: <b>${profit} U$s</b> </br>`);


