let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);
// }

// let soma = 0;
// for (let index = 0; index < numbers.length; index++) {
//   soma += numbers[index];
// }
// console.log(soma);

// let soma = 0;
// for (let index = 0; index < numbers.length; index++) {
//   soma += numbers[index];
// }
// let media = soma / numbers.length;

// if (media > 20) {
//   console.log("Valor maior que 20");
// } else {
//   console.log("Valor menor ou igual a 20");
// }

// let higherNumber = numbers[0];
// for (let index = 0; index < numbers.length; index++) {
//   if (higherNumber < numbers[index]) {
//     higherNumber = numbers[index];
//   }
// }
// console.log(higherNumber);

// let smallerNumber = numbers[0];
// for (let index = 0; index < numbers.length; index++) {
//   if (smallerNumber > numbers[index]) {
//     smallerNumber = numbers[index];
//   }
// }
// console.log(smallerNumber);

let impar = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    impar += 1;
  }
}
if (impar > 0) {
  console.log(impar);
} else {
  console.log("nenhum valor impar encontrado");
}

// let number = [];

// for (index = 1; index <= 25; index += 1) {
//   number.push(index);
// }
// for (i = 0; i < number.length; i += 1) {
//   console.log(number[i] / 2);
// }
