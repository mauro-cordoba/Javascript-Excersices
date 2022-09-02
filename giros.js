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

// ---VARIABLES SELCTORS IN ROULLETE---

let selectorRuleto = document.querySelector(".zero");
let selectorRulet1 = document.querySelector(".one");
let selectorRulet2 = document.querySelector(".two");
let selectorRulet3 = document.querySelector(".three");
let selectorRulet4 = document.querySelector(".four");
let selectorRulet5 = document.querySelector(".five");
let selectorRulet6 = document.querySelector(".six");
let selectorRulet7 = document.querySelector(".seven");
let selectorRulet8 = document.querySelector(".eigth");
let selectorRulet9 = document.querySelector(".nine");
let selectorRulet10 = document.querySelector(".ten");
let selectorRulet11 = document.querySelector(".eleven");
let selectorRulet12 = document.querySelector(".twelve");
let selectorRulet13 = document.querySelector(".thirdteen");
let selectorRulet14 = document.querySelector(".fourteen");
let selectorRulet15 = document.querySelector(".fifteen");
let selectorRulet16 = document.querySelector(".sixteen");
let selectorRulet17 = document.querySelector(".seventeen");
let selectorRulet18 = document.querySelector(".eighteen");
let selectorRulet19 = document.querySelector(".nineteen");
let selectorRulet20 = document.querySelector(".twenty");
let selectorRulet21 = document.querySelector(".twenty-one");
let selectorRulet22 = document.querySelector(".twenty-two");
let selectorRulet23 = document.querySelector(".twenty-three");
let selectorRulet24 = document.querySelector(".twenty-four");
let selectorRulet25 = document.querySelector(".twenty-five");
let selectorRulet26 = document.querySelector(".twenty-six");
let selectorRulet27 = document.querySelector(".twenty-seven");
let selectorRulet28 = document.querySelector(".twenty-eigth");
let selectorRulet29 = document.querySelector(".twenty-nine");
let selectorRulet30 = document.querySelector(".thirty");
let selectorRulet31 = document.querySelector(".thirty-one");
let selectorRulet32 = document.querySelector(".thirty-two");
let selectorRulet33 = document.querySelector(".thirty-three");
let selectorRulet34 = document.querySelector(".thirty-four");
let selectorRulet35 = document.querySelector(".thirty-five");
let selectorRulet36 = document.querySelector(".thirty-six");

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

if (lastNumber === 0) {
    selectorRulet0.classList.add('active');
}
if (lastNumber === 1) {
    selectorRulet1.classList.add('active');
}
if (lastNumber === 2) {
    selectorRulet2.classList.add('active');
}
if (lastNumber === 3) {
    selectorRulet3.classList.add('active');
}
if (lastNumber === 4) {
    selectorRulet4.classList.add('active');
}
if (lastNumber === 5) {
    selectorRulet5.classList.add('active');
}
if (lastNumber === 6) {
    selectorRulet6.classList.add('active');
}
if (lastNumber === 7) {
    selectorRulet7.classList.add('active');
}
if (lastNumber === 8) {
    selectorRulet8.classList.add('active');
}
if (lastNumber === 9) {
    selectorRulet9.classList.add('active');
}
if (lastNumber === 10) {
    selectorRulet10.classList.add('active');
}
if (lastNumber === 11) {
    selectorRulet11.classList.add('active');
}
if (lastNumber === 12) {
    selectorRulet12.classList.add('active');
}
if (lastNumber === 13) {
    selectorRulet13.classList.add('active');
}
if (lastNumber === 14) {
    selectorRulet14.classList.add('active');
}
if (lastNumber === 15) {
    selectorRulet15.classList.add('active');
}
if (lastNumber === 16) {
    selectorRulet16.classList.add('active');
}
if (lastNumber === 17) {
    selectorRulet17.classList.add('active');
}
if (lastNumber === 18) {
    selectorRulet18.classList.add('active');
}
if (lastNumber === 19) {
    selectorRulet19.classList.add('active');
}
if (lastNumber === 20) {
    selectorRulet20.classList.add('active');
}
if (lastNumber === 21) {
    selectorRulet21.classList.add('active');
}
if (lastNumber === 22) {
    selectorRulet22.classList.add('active');
}
if (lastNumber === 23) {
    selectorRulet23.classList.add('active');
}
if (lastNumber === 23) {
    selectorRulet23.classList.add('active');
}
if (lastNumber === 24) {
    selectorRulet24.classList.add('active');
}
if (lastNumber === 25) {
    selectorRulet25.classList.add('active');
}
if (lastNumber === 26) {
    selectorRulet26.classList.add('active');
}
if (lastNumber === 27) {
    selectorRulet27.classList.add('active');
}
if (lastNumber === 28) {
    selectorRulet28.classList.add('active');
}
if (lastNumber === 29) {
    selectorRulet29.classList.add('active');
}
if (lastNumber === 30) {
    selectorRulet30.classList.add('active');
}
if (lastNumber === 31) {
    selectorRulet31.classList.add('active');
}
if (lastNumber === 32) {
    selectorRulet32.classList.add('active');
}
if (lastNumber === 33) {
    selectorRulet33.classList.add('active');
}
if (lastNumber === 34) {
    selectorRulet34.classList.add('active');
}
if (lastNumber === 35) {
    selectorRulet35.classList.add('active');
}
if (lastNumber === 36) {
    selectorRulet36.classList.add('active');
}


$$stake = Math.floor($$stake);
divStake.innerHTML = (`${$$stake} u$s`);
divTurns.innerHTML = (`${$$turns} giros`);

console.log(lastNumber);
console.log(tiradas);