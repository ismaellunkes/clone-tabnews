const calculadora = require("../../models/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
})

test("somar 'banana' + 100  deveria retornar 'erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("erro");
})