function twoYears() {
  let years = document.getElementsByTagName("p")[1];
  years.innerHTML = "ola marilene";
}
twoYears();

function quadrado() {
  let quadradoCor = document.getElementsByClassName("main-content")[0];
  quadradoCor.style.backgroundColor = "rgb(76,164,109)";
}
quadrado();

function quadradoVermelho() {
  let quadradoCor = document.getElementsByClassName("center-content")[0];
  quadradoCor.style.backgroundColor = "white";
}
quadradoVermelho();
function repairH1() {
  let reparar = document.getElementsByClassName("title")[0];
  reparar.innerHTML = "Desafio - JavaScript";
}
repairH1();

function firstP() {
  let upper = document.getElementsByTagName("p")[0];
  upper.innerHTML = upper.innerHTML.toUpperCase();
}
firstP();

function paragraf() {
  let para = document.getElementsByTagName("p");
  for (let index = 0; index < para.length; index += 1) {
    console.log(para[index].innerHTML);
  }
}
paragraf();
