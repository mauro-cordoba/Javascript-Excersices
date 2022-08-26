//* CONVERSOR FROM 'MM' TO 'INCHES'

// const conversor = (num) => {
//     let value = console.log(`Number ${num} will be convert to inches`);
//     if  (value != String) {
//         let resultado = num * 2.55;
//         resultado = Math.round(resultado, -2);
//         document.write(`The result is ${resultado} inches`);
//     } else {
//         document.write('No ingreso un numero');
//     }
// }

// conversor(23);

// MULTIPLICATION BY

// class multi {
//     constructor(number, multiplicator) {
//         this.numberForMultiply = number;
//         this.numMultiplicator = multiplicator;
//     }
//     result() {
//         let product = this.numberForMultiply * this.numMultiplicator;
//         document.write(`The product is: <b> ${product}</b>`);
//     }
// }

// let operation = new multi(prompt('Number'),prompt('for'));

// operation.result();

// NUMBER POSITIVE OR NEGATIVE

const posOrNeg = (num) => {
    if ( num > 0) {
        document.write(`El numero <b>${num}</b> es <b> POSITIVO </b>`);
    }
    if (num < 0) {
        document.write(`El numero <b>${num}</b> es <b> NEGATIVO </b>`);
    }
    if (num == 0) {
        document.write(`El numero <b>${num}</b> es <b> ZERO </b>`);
    }
    else {
        document.write('Ingrese un numero valido');
    }

}

posOrNeg(2);