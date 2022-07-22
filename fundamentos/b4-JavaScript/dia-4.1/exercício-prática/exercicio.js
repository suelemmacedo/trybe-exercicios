// Exercício Prática //
// 1 //

const A = 10;
const B = 13;

Adição = ( A +  B);
console.log (Adição);

Subtração = (A - B);
console.log (Subtração);

Multiplicação = (A * B);
console.log (Multiplicação);

Divisão = (A / B);
console.log (Divisão);

Módulo = (A % B);
console.log (Módulo);

// 2 //

const numero1 = 15;
const numero2 = 13;

if ( numero1 > numero2)  {
    console.log ("Número 1 é maior que número 2");
} else {
console.log ("Número 1 é menor que número 2");
}

// 3 //

const C = 35;
const D = 105;
const E = 58;

if (C > D && C > E) {
    console.log ("O maior número é C");
} else if (D > C && D > E) {
    console.log ("O maior número é D");
} else {
    console.log ("O maior número é E");
}

// 4 // 

const valor = -85;

if (valor < 0) {
    console.log ("Negative");
}
else if (valor > 0) {
    console.log ("Positive");
}   
else {
    console.log ("Zero");
}

// 5 //

let lado1 = 60;
let lado2 = 60;
let lado3 = 60;

if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
    console.log ("true")
} else if (lado1 < 0 && lado2 < 0 && lado3 < 0) {
    console.log ("false")
} else {
    console.log("ERROR");
}

