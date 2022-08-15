// Exercicio 1 //
const myName = "Suelem";
const birthCity = "Bananeiras";
let birthYear = 1991;

birthYear = 2030;


console.log(myName);
console.log(birthCity);
console.log(birthYear);

console.log(birthYear);

// Exercicio 2 //
const base = 5;
let height = 8;
const area = base * height;

console.log (base);
console.log (height);
console.log (area);

const perimeter = 26;

console.log (perimeter);

// Exercicio 3 //

const notaDesafio = 13;

if (notaDesafio >= 80) {
    console.log ("Parabéns, você foi aprovada (o)!")
}
else if (notaDesafio < 80 && notaDesafio >= 60) {
    console.log ("Você está na nossa lista de espera")
} 
else if (notaDesafio < 60) {
    console.log ("Você foi reprovada (o)!");
}

// Exercício 4 //

const currentHour = 21;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >=14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
  }
  else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!"
  }
else if (currentHour < 11 && currentHour >= 4) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

// Exercicio 5 //

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log ("Oba, mais um dia de aprendizado na Trybe :D");
} else {
    console.log  ("Finalmente, descanso merecido Uwu");
}

// Exercicio 6 //

let resultado = "lista";

switch (resultado) {
    case "aprovada": 
    console.log("resutado <= 7");
      
break;
    case "lista":
    console.log ("resultado = 6.9");
    
break;
    case "reprovada":
    resultado = ("resultado < 6.9");
default: "Nenhum dos resultados anteriores" 
}