const historialSpan = document.querySelector(".historial");

let bet = 1.3;
let profits = .3846153846153846;
let divStake = document.querySelector(".stake");
let divTurns = document.querySelector(".turns");
let documentFragment = document.createDocumentFragment();

// ---VARIABLES SELCTORS IN ROULLETE---

let rojos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let negros = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,31,33,35];

// let spanNumber = document.createElement('SPAN');
// documentFragment.appendChild(spanNumber);
// spanNumber.innerHTML = ball;

// $historialSpan.appendChild(documentFragment);

 
// divStake.innerHTML = (`${stake} u$s`);
// divTurns.innerHTML = (`${turns} giros`);

const boton = document.querySelector(".ball");

boton.addEventListener("click",(e)=>{
    const predictor = ()=> {
        let start = 0;
        let end = 36;
        const ball = Math.floor(Math.random() * (end - start + 1)) + start;
        return ball
    }
    
    const bolaRandom = predictor();

    let numero = document.querySelector(".number");
    numero.innerHTML = bolaRandom;
});
