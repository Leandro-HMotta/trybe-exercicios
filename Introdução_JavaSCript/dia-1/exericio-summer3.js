const salario = 3000;
let salarioInss;
let salarioIR;

if (salario <= 1556.94) {
  salarioInss = salario - salario * 0.08;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  salarioInss = salario - salario * 0.09;
} else if (salario >= 2594.93 && salario <= 5189.82) {
  salarioInss = salario - salario * 0.11;
} else {
  salarioInss = salario - 570;
}
console.log(salarioInss.toFixed(2));
if (salarioInss <= 1903.98) {
  salarioIR = salarioInss;
} else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
  salarioIR = salarioInss - salarioInss * 0.075 + 142.8;
} else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
  salarioIR = salarioInss - salarioInss * 0.15 + 354.8;
} else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
  salarioIR = salarioInss - salarioInss * 0.225 + 636.13;
} else {
  salarioIR = salarioInss - salarioInss * 0.275 + 869.36;
}
console.log(salarioIR.toFixed(2));
