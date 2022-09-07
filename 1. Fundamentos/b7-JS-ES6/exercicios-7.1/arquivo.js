/* 1. 🚀 Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
Modifique a estrutura da função para que ela seja uma arrow function; ok
Modifique as variáveis para que respeitem o escopo onde estão declaradas;
Modifique as concatenações para template literals. ok */

const testingScope = (escopo) => {
  // alterando a estrutura para utilizar arrow function
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`; // substituição das concatenações de strings para template literals
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(false);

/* 
const testingScope = (escopo) => escopo ? ifScope */

/* 2. 🚀 Crie uma função que retorne um array em ordem crescente. */


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7; 
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
};

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada

// Outra forma de resolver

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);

// Forma mais direta

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);