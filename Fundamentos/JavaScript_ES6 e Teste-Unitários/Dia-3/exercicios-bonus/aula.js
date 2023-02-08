function add(array, item) {
  if (Array.isArray(array) === false) {
    throw new Error('blabla');
  }
  const push = array.push(item);
  return push;
}

console.log(add(1, 5));
module.exports = add;
