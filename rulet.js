
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

var win = 0;
var bet = 0.1;

const predictor = (myColor, n) => {
		myColor = myColor.toUpperCase();
		let start = 0;
		let end = 14;
		for (let i = 0; i < n; i++) {
			let ball = Math.floor(Math.random() * (end - start + 1)) + start;			
			if ( ball%2 == 0 && ball != 0){
				let $colorBlack = "BLACK";
				// document.write(`Nª ${ball}<b style='color:black'> ${$colorBlack}</b></br>`);
				// return $colorBlack;
				if (myColor == $colorBlack) {
					document.write(`BALL: ${ball}<b style='color:#5787dc'></br>You WIN</b>'</br></br>'`);
					win++;
				}
				if (myColor != $colorBlack) {
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br></br>'`);
					bet = bet*2;
				}
			}	

			if ( ball % 2 != 0){
				let $colorRed = "RED";
				// document.write(`Nª ${ball}<b style='color:red'> ${$colorRed}</b></br>`);
				// return $colorRed;
				if (myColor == $colorRed) {
					document.write(`BALL: ${ball}<b style='color:#5787dc'></br>You WIN</b>'</br></br>'`);
					win++;
				}
				if ( myColor != $colorRed) {
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br></br>'`);
					bet = bet*2;
				}
			}
			if ( ball == 0) {
				let $colorGreen = "GREEN";
				// document.write(`Nª ${ball}<b style='color:green'> ${$colorGreen}</b></br>`);
				// return $colorGreen;
				if (myColor == $colorGreen) {
					document.write(`BALL: ${ball}<b style='color:#5787dc'></br>You WIN</b>'</br></br>'`);
					win++;
				}
				if (myColor != $colorGreen) {
					document.write(`BALL: ${ball}<b style='color:red'></br>You LOSE</b>'</br></br>'`);
					bet = bet*2;
				}
			}

			
	}

}

predictor('red', 10);
// let turns = prompt('Insert turns of roulette:')
let averageWin = Math.round(( win / 10) * 100);

document.write(`Percentage of win: ${averageWin} % </br>`);

document.write(`The Bet is: ${bet}`);


