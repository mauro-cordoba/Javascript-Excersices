const predictor = ()=> {
    let start = 0;
    let end = 36;
    const ball = Math.floor(Math.random() * (end - start + 1)) + start;
    return ball
}

const bolaRandom = predictor();

let tiradas = 10;

// for ( let i = 0; i < tiradas; i++ ) {
//     document.write(predictor() + '</br>')
// }

document.write(bolaRandom);