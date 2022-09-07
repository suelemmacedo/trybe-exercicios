const desconto10porcento = (total) => total * 0.1;
const desconto20porcento = (total) => total * 0.2;
const desconto20reais = () => 20;
const desconto50reais = () => 50;
const descontoPromocional = (total) => (total > 100) ? 20 : total * 0.2;

const checkout = (items, desconto) => {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  // desconto
  /* total -= total * 0.2 */
  // total = total - (total * 0.2)

 /*  total = total - desconto(total); */
  total -= desconto(total);
  return total;
}

const c = checkout([10, 20, 30, 40, 50], (b) => {
  return (b > 150) ? 50 : 0;
});
console.log(c);



/* 
Primeira forma */
/* const checkout = (items) => {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  // desconto
  total -= total * 0.2
  // total = total - (total * 0.2)
  return total;
} */
/* 
const total = checkout([10, 20, 30, 40, 50]);
console.log(total); */