
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

const predictor = (myColor, n) => {

	for (let i = 0; i < n; i++) {

	myColor = myColor.toUpperCase();

	const turn = (n) => {
		for (let i = 0; i < n; i++) {
			let start = 0;
			let end = 14;
			ball = Math.floor(Math.random() * (end - start + 1)) + start;
			if ( ball % 2 == 0 && ball != 0){
				let $colorBlack = "BLACK";
				// document.write(`Nº${ball}<b> ${$colorBlack}</b></br></br>`);
				return $colorBlack;
			}
			if ( ball % 2 != 0){
				let $colorRed = "RED";
				// document.write(`Nª ${ball}<b style='color:red'> ${$colorRed}</b></br></br>`);
				return $colorRed;
			}
			if ( ball == 0) {
				let $colorGreen = "GREEN";
				// document.write(`Nª ${ball}<b style='color:green'> ${$colorGreen}</b></br></br>`);
				return $colorGreen;
			}
		}
}
		if ( myColor == turn ) {
			document.write(`BALL: ${turn}</br><b style='color:gold'>You WIN</b>'</br>'`)
		}
		if ( myColor != turn || myColor != turn || myColor != turn) {
			document.write(`BALL: ${turn}</br><b style='color:grey'>You LOSE</b>'</br>'`)
		}
	}
}

predictor('BLACK', 12);


