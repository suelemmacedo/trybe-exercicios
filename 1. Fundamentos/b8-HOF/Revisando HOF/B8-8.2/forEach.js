const prices = [4903, 4659, 1310, 1580, 1337];

// De R$4000 por R$3600 - 10% de desconto
const oferta = (price, index, array) => console.log(`[${index+1} / ${array.length}] De ${price} por ${price * 0.9}`);

const myForEach = (array, callback) => {
  // for (let index = 0; index < array.lenght; index += 1) {}
  for (const index in array) {
    // console.log(typeof index);
    const element = array[index];
    callback(element, parseInt(index), array); // no for in o index é uma string é preciso converter pra número com o parseInt
    }
  }

  /* myForEach(prices, oferta); */


//forma 1
/* for (let index = 0; index < prices.length; index += 1) {
  const price = prices[index];
  oferta(price, index, prices);
} */

//forma 2
/* const prices = [4903, 4659, 1310, 1580, 1337];
const oferta = (price, index, array) => console.log(`[${index+1} / ${array.length}] De ${price} por ${price * 0.9}`);
for (const index in prices) { // Diferença do for in para o for of, o for in percorre os indices, o for of percorre os valores
  const price = prices[index];
  oferta(price, parseInt(index), prices);
}
 */

//forma 3
/* for (const price of prices) {
  oferta(price);
} */

/* prices.forEach(oferta); */ // esta linha corresponde a mesma coisa que a forma 3 que utiliza o for of.
prices.forEach(oferta); // estrutura: prices (nome do array). forEach(oferta(o que se deseja fazer para cada elemento desse array))

//Dentro do forEach você pode passar uma função nova ou uma função que já foi declarada antes.
// Exemplo: prices.forEach((valor) => console.log(valor + 100));






const names = ['Suelem', 'Iara', 'Pepe', 'Theo'];

const employess = [
  { name: 'Louis Lane', job: 'reporter', isManager: true},
  { name: 'Clark Kent', job: 'reporter', isManager: false},
  { name: 'Bruce Wayne', job: 'CEO', isManager: true},
  { name: 'Barry Allen', job: 'forensic', isManager: false},
  { name: 'Iris West', job: 'reporter', isManager: false},
];