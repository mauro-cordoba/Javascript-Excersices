
const roulette = (n) => {
		for (let i = 0; i < n; i++) {
			let start = 0;
			let end = 14;
			ball = Math.floor(Math.random() * (end - start + 1)) + start;

			if ( ball % 2 == 0 && ball != 0){
				document.write(`Nº${ball}<b> BLACK</b></br></br>`);
			}
			if ( ball % 2 != 0){
				document.write(`Nª ${ball}<b style='color:red'> RED</b></br></br>`);
			}
			if ( ball == 0) {
				document.write(`Nª ${ball}<b style='color:green'> ZERO</b></br></br>`);
			}
		}
}

roulette(8);

