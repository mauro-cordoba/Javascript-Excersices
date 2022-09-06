const historialSpan = document.querySelector(".historial");

let bet = 1.3;
let profits = .3846153846153846;
let divStake = document.querySelector(".stake");
let divTurns = document.querySelector(".turns");
let documentFragment = document.createDocumentFragment();
let giros = 0;

// ---VARIABLES SELCTORS IN ROULLETE---

let rojos = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let negros = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
let todosLosNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

// let spanNumber = document.createElement('SPAN');
// documentFragment.appendChild(spanNumber);
// spanNumber.innerHTML = ball;

// $historialSpan.appendChild(documentFragment);

 
// divStake.innerHTML = (`${stake} u$s`);


const boton = document.querySelector(".ball");


boton.addEventListener("click",(e)=>{

    const predictor = ()=> {
        let start = 0;
        let end = 36;
        const ball = Math.floor(Math.random() * (end - start + 1)) + start;
        return ball
    }
    
    
    const bolaRandom = predictor();

    colorPaño(bolaRandom);

    let divnumero = document.querySelector(".number");
    divnumero.innerHTML = bolaRandom;

    if (rojos.includes(bolaRandom)) {
        divnumero.classList.remove('black','green')
        divnumero.classList.add('red');
        giros++;
    }
    if (negros.includes(bolaRandom)) {
        divnumero.classList.remove('red','green');
        divnumero.classList.add('black');
        giros ++;
    }
    if (bolaRandom === 0) {
        divnumero.classList.remove('red','black');
        divnumero.classList.add('green');
        giros ++;
    }

});

divTurns.innerHTML = (`${giros} giros`);


colorPaño = (bolaRandom) => {
    bolaRandom === todosLosNumeros[bolaRandom]
    divPaño = document.querySelector(`.numbers:nth-of-type(${bolaRandom+1})`);
    divPaño.classList.add('active');
}

// boton.addEventListener("click",(e)=>{
//     colorPaño = (bolaRandom) => {
//         bolaRandom === todosLosNumeros[bolaRandom]
//         divPaño = document.querySelector(`.numbers:nth-of-type(${bolaRandom+1})`);
//         divPaño.classList.remove('active');
//     }
// })