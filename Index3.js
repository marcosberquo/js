// function calc(x1, x2, operador) {
//     return eval(`${x1} ${operador} ${x2}`);
// }

// let resultado = calc(1, 2, "/");

// console.log(resultado);


// Função Anônima

// let resultado =
// (function (x1, x2, operador) {
//     return eval(`${x1} ${operador} ${x2}`);
// })(6, 2, "*");

// console.log(resultado);


// Arrow function

let calc = (x1, x2, operador) => {
    return eval(`${x1} ${operador} ${x2}`);
}

let resultado = calc(3, 2, "*");

console.log(resultado);