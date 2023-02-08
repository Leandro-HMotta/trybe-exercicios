const sorteio = (sortNumber) =>
  Math.ceil(Math.random() * 5) === sortNumber
    ? 'Parabéns, você ganhou'
    : 'Tente novamente';
console.log(sorteio(2));
