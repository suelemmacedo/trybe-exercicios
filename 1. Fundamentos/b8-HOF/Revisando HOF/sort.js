// sort 
//Array nomes de pessoas:
const pessoas = [
  'Iara', 'Pepe', 'Suelem', 'Gael', 'Theo'
];

pessoas.sort();
console.log(pessoas);

// Array de números:
const numeros = [15, 2, 10, 35, 31, 80, 3, 56]; // ficará ordenado como string e não como números

numeros.sort((a, b) => a - b);
console.log(numeros);

/* console.log(a, b);
if (a > b) {
  return 1;
} else {
  return -1;
}
});

console.log(numeros); */