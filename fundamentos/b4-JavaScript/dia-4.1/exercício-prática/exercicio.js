// Exercício Prática
// 1

const A = 10;
const B = 13;

Adição = A + B;
console.log(Adição);

Subtração = A - B;
console.log(Subtração);

Multiplicação = A * B;
console.log(Multiplicação);

Divisão = A / B;
console.log(Divisão);

Módulo = A % B;
console.log(Módulo);

// 2

const numero1 = 15;
const numero2 = 13;

if (numero1 > numero2) {
  console.log("Número 1 é maior que número 2");
} else {
  console.log("Número 1 é menor que número 2");
}

// 3

const C = 35;
const D = 105;
const E = 58;

if (C > D && C > E) {
  console.log("O maior número é C");
} else if (D > C && D > E) {
  console.log("O maior número é D");
} else {
  console.log("O maior número é E");
}

// 4

const valor = -85;

if (valor < 0) {
  console.log("Negative");
} else if (valor > 0) {
  console.log("Positive");
} else {
  console.log("Zero");
}

// 5

let lado1 = 60;
let lado2 = 60;
let lado3 = 60;

let somaAngulos = lado1 + lado2 + lado3;
let todosAngulosSaoPositivos = lado1 > 0 && lado2 > 0 && lado3 > 0;

if (todosAngulosSaoPositivos) {
  if (somaAngulos === 180) {
    console.log("true");
  } else {
    console.log("false");
  }
} else {
  console.log("ERROR");
}

// 6 Resolução visualizada por vídeo pra melhor entendimento.

// 7

let nota = 100;

if (nota < 0 || nota > 100) {
  console.log("Error!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// 8 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
//Bônus: use somente um if //

const number1 = 17;
const number2 = 15;
const number3 = 23;

if (number1 % 2===0 || number2 % 2===0 || number3 % 2===0) {
  console.log("true");
} else {
  console.log("false");
}

// 9 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// BÔnus: use somente um if

const num1 = 14;
const num2 = 10;
const num3 = 20;

if (num1 % 2!==0 || num2 % 2!==0 | num3 % 2!==0) {
  console.log("true");
} else {
  console.log("false");
}
