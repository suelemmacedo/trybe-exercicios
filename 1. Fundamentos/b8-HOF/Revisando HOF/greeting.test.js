const { greetingBB, iara, suelem, pepe } = require("./greeting");

describe("Testa os diferentes cumprimentos ao BB", () => {
  // o describe é uma HOF
  it("Cumprimento padrão", () => {
    // o it também é uma HOF, recebe como parâmetro uma callback
    expect(greetingBB(iara)).toEqual("Bom dia, BB!");
  });
  it("Cumprimento outro", () => {
    expect(greetingBB(suelem)).toEqual("Bom dia! Você dormiu bem, BB?");
  });
  it("Cumprimento outro", () => {
    expect(greetingBB(pepe)).toEqual("Au au! Me coloca na cama BB!");
  });
  it("Cumprimento novo", () => {
    expect(greetingBB(pepe)).toEqual("Au au! Me coloca na cama BB!");
  });
  it("Cumprimento novo", () => {
    expect(greetingBB((who) => `Bom dia, ${who}!`)).toEqual("Bom dia, BB!");
  });
});
