const { myRemove, myFizzBuzz, mapString, encode, decode } = require('./script');

// describe(`Testa myRemove`, () => {
//   it(`Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado`, () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   }),
//     it(`Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];`, () => {
//       expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//     }),
//     it(`Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado: [1, 2, 3, 4]`, () => {
//       expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
//     });
// });

// describe('Testa myFizzBuzz', () => {
//   it('Verifica se o parâmetro é divisível por 5 e por 3', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//   }),
//     it('Verifica se o parâmetro é divisível  por 3', () => {
//       expect(myFizzBuzz(9)).toBe('fizz');
//     }),
//     it('Verifica se o parâmetro é divisível  por 5', () => {
//       expect(myFizzBuzz(10)).toBe('buzz');
//     });
// });

describe('Testa se enconde e decode são funções', () => {
  it('Verifica se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Verifica se encode é uma função', () => {
    expect(typeof decode).toBe('function');
  });
});

describe('Testa encode e decode', () => {
  it('Verifica se encode retorna números', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Verifica se decode retorna números', () => {
    expect(decode('12345')).toBe('aeiou');
  });
});
