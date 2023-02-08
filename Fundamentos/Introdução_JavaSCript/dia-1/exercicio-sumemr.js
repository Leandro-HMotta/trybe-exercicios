// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

// const valor1 = 14;
// const valor2 =20;
// const valor3 =13;


// if(valor1 > valor2 && valor1 > valor3){
//   console.log (valor1 +' é maior');
// }else if (valor2 > valor1 && valor2 > valor3){
//   console.log(valor2 + ' é maior');
// }else {
//   console.log(valor3 + ' é maior');
// }

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
// const positive = 0;


// if(positive > 0){
//   console.log('valor positivo');
// }else if (positive < 0 ){
//   console.log('valor negativo');
// }else {
//   console.log('zero');
// }

// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const angulo1 = 20;
const angulo2 = 100;
const angulo3 = 60;
 if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
 console.log('error');
 }else if(angulo1 + angulo2 + angulo3 === 180){
  console.log('true');
 }
 else{
  console.log ('false');
 }