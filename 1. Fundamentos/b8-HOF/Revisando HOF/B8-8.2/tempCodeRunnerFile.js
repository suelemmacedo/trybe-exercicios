const prices = [4903, 4659, 1310, 1580, 1337];
const oferta = (price, index, array) => console.log(`[${index+1} / ${array.length}] De ${price} por ${price * 0.9}`);
for (const index in prices) { // Diferença do for in para o for of, o for in percorre os indices, o for of percorre os valores
  const price = prices[index];
  oferta(price, parseInt(index), prices);
}
