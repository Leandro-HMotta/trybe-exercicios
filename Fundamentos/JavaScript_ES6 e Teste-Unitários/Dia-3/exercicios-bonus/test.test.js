const add = require('./aula');

it('adiciona item ao inventario', () => {
  const arr = [1, 2, 3, 4];
  const previusLeng = arr.length;
  expect(add(arr, 6)).toBe(previusLeng + 1);
});
