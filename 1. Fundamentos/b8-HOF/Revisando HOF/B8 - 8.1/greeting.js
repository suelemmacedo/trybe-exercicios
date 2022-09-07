const iara = (who) => `Bom dia, ${who}!`;
const suelem = (who) => `Bom dia! Você dormiu bem, ${who}?`
const pepe = (who) => `Au au! Me coloca na cama ${who}!`;

const greetingBB = (callback) => {
  const who = 'bb';
  const message = callback(who);
  return message;
  /* return callback(who); */ //forma mais simples
}

console.log(greetingBB(pepe));

module.exports = { greetingBB, iara, suelem, pepe };