const $historialSpan = document.querySelector(".historial");

let $$stake = 30;
let $$goal = 6 + $$stake;
let $$bet = 1.3;
let $$profits = .3846153846153846;
let $$start = 0;
let $$end = 36;
let $$turns = 0;
let $$win = 0;
let $$prediction = [0, 1, 2, 3, 4, 7, 11, 12, 13, 14, 17, 18, 19, 20, 24, 27, 25, 26, 29, 32, 28, 31, 33, 36, 34, 35];
let divStake = document.querySelector(".stake");
let divTurns = document.querySelector(".turns");
let documentFragment = document.createDocumentFragment();
let selectorRulet = document.querySelector(".one");
let tiradas = [];

while ($$stake <= $$goal && $$stake >= 0) {
	let ball = Math.floor(Math.random() * ($$end - $$start + 1)) + $$start;
    tiradas.push(ball);
    let spanNumber = document.createElement('SPAN');
    documentFragment.appendChild(spanNumber);
    spanNumber.innerHTML = ball;
    $historialSpan.appendChild(documentFragment);
    let div = document.querySelector(".number");
        if (ball === 0){
            div.classList.add('green');
            spanNumber.classList.toggle('green');
            div.innerHTML = (ball);
        }

        if (ball === 1 || ball === 3 || ball === 5 || ball === 7 || ball === 9 || ball === 12 || ball === 14 || ball === 16 || ball === 18 || ball === 19 || ball === 21 || ball === 23 || ball === 25 || ball === 27 || ball === 30 || ball === 32 || ball === 34 || ball === 36 && ball !== 0){
            spanNumber.classList.add('red');
            spanNumber.classList.replace('green','red');
            div.classList.replace('green','red');
            div.classList.replace('black','red');
            div.classList.add('red');
            div.innerHTML = (ball);
        }        
        
        if (ball === 2 || ball === 4 || ball === 6 || ball === 8 || ball === 10 || ball === 11 || ball === 13 || ball === 15 || ball === 17 || ball === 20 || ball === 22 || ball === 24 || ball === 26 || ball === 28 || ball === 29 || ball === 31 || ball === 33 || ball === 35 && ball !== 0) {
            spanNumber.classList.add('black');
            spanNumber.classList.replace('green','black');
            div.classList.replace('red','black');
            div.classList.replace('green','black');
            div.innerHTML = (ball);
        }

	if ($$prediction.includes(ball)) {
		$$win++;
		$$turns++;
		$$stake += ($$bet * $$profits);
       
	} else {
		$$turns++;
		$$stake -= $$bet;
	}
    
}

let lastNumber = tiradas[tiradas.length-1];

if (lastNumber === 1) {
    selectorRulet.classList.toggle('active');
} if (lastNumber === 2) {
        selectorRulet.classList.toggle('active');
    }
        else if (lastNumber === 3) {
            selectorRulet.classList.toggle('active');
        }
           else if (lastNumber === 4) {
                selectorRulet.classList.toggle('active');
            }
               else if (lastNumber === 5) {
                    selectorRulet.classList.toggle('active');
                }
                   else if (lastNumber === 6) {
                        selectorRulet.classList.toggle('active');
                    }
                       else if (lastNumber === 7) {
                            selectorRulet.classList.toggle('active');
                        }


$$stake = Math.floor($$stake);
divStake.innerHTML = (`${$$stake} u$s`);
divTurns.innerHTML = (`${$$turns} giros`);

console.log(lastNumber);
console.log(tiradas);