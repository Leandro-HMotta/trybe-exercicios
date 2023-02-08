// function palindromo(a) {
//   let split = a.split("");

//   let reverse = split.reverse();

//   let join = reverse.join("");

//   if (a === join) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromo("arara"));

// EXERCICIO MAIOR INDEX ---------------------------------------------

// let arrayNumbers = [2, 3, 6, 7, 10, 1];

// function biggestIndexValue(a) {
//   let biggestNumber = a[0];
//   for (index = 1; index < a.length; index += 1) {
//     if (biggestNumber < a[index]) {
//       biggestNumber = a[index];
//     }
//   }
//   return a.indexOf(biggestNumber);
// }

// console.log(biggestIndexValue(arrayNumbers));

// -------------------------------------------------------------

// let arrayNumbers = [2, 3, 6, 7, 10, 0, -3];

// function biggestIndexValue(a) {
//   let smallNumber = a[0];
//   for (index = 1; index < a.length; index += 1) {
//     if (smallNumber > a[index]) {
//       smallNumber = a[index];
//     }
//     // console.log(biggestNumber, a[index]);
//   }
//   return a.indexOf(smallNumber);
// }

// console.log(biggestIndexValue(arrayNumbers));

//-------------------------------------------------------------------------

// let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

// function bigNome(a) {
//   let maiorNome = "";
//   for (index = 0; index < a.length; index += 1) {
//     if (maiorNome.length < a[index].length) {
//       maiorNome = a[index];
//     }
//   }

//   return maiorNome;
// }

// console.log(bigNome(nomes));

// -----------------------------NAO FEITO-----------------------------------------------

// let numero = [2, 3, 2, 5, 8, 2, 3];

// function numRepeat(a) {
//   let bigRep = 0;
//   let counter = 0;
//   let mostRepeat = 0;

//   for (let index = 0; index < a.length; index += 1) {
//     for (let index2 = 1; index2 < a.length; index2 += 1) {
//       console.table(index2);
//       if (a[index] === a[index2]) {
//         counter += 1;
//       }
//     }

//     if (counter > mostRepeat) {
//       bigRep = a[index];
//       mostRepeat = counter;
//     }
//   }
//   return bigRep;
// }
// console.log(numRepeat(numero));

// ----------------------------------------------------------------------

function sum(a) {
  let num = 0;
  for (index = 0; index < a; index += 1) {
    num += index;
  }
  return a + num;
}
console.log(sum(5));
