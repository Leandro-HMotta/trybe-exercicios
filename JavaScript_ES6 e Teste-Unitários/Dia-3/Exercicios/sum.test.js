const sum = require('./sum');

describe('Testa a função sum', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se o retorno de sum(4, "5") é um erro', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('Teste se o retorno de sum(4, "5") é parameters must be numbers', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(new Error('parameters must be numbers'));
  });
});
