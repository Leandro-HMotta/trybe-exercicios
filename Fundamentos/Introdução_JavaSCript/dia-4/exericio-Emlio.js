let arrayOfNumbers = [3, 3, 4, 5, 2, 3, 5, 4, 5, 5, 5];

function numRepeat(array) {
  let bigRep = 0;
  let mostRepeat = new Number();
  for (let index = 0; index < array.length; index += 1) {
    let counter = 0;
    for (let index2 = +index + 1; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        counter += 1;
      }
    }
    if (counter > mostRepeat) {
      bigRep = array[index];
      mostRepeat = counter;
    }
  }
  return bigRep;
}
console.log(numRepeat(arrayOfNumbers));
