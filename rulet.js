
const roulette = (n) => {
		for (let i = 0; i < n; i++) {
			let start = 0;
			let end = 14;
			ball = Math.floor(Math.random() * (end - start + 1)) + start;
			if ( ball % 2 == 0 && ball != 0){
				let $color = 'BLACK';
				document.write(`Nº${ball}<b> BLACK</b></br></br>`);
				return $color;
			}
			if ( ball % 2 != 0){
				let $color = 'RED';
				document.write(`Nª ${ball}<b style='color:red'> RED</b></br></br>`);
				return $color;
			}
			if ( ball == 0) {
				let $color = 'GREEN';
				document.write(`Nª ${ball}<b style='color:green'> ZERO</b></br></br>`);
				return $color;
			}
		}
}

roulette(14);

let number = prompt('Insert a COLOR');
const predictor = (number) => {
	
}
