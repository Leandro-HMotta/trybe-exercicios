const body = document.getElementById("peito");
const h1damassa = document.createElement("h1");
h1damassa.innerHTML = "TrybeTrip - Agência de Viagens";
body.appendChild(h1damassa);

const creatMain = document.createElement("main");
creatMain.className = "main-content";
body.appendChild(creatMain);

const creatSection = document.createElement("section");
creatSection.className = "center-content";
creatMain.appendChild(creatSection);

const creatP = document.createElement("p");
creatSection.appendChild(creatP);
creatP.innerHTML = "rodrigueira da massa";

const creatSectionLeft = document.createElement("section");
creatSectionLeft.className = "left-content";
creatMain.appendChild(creatSectionLeft);

const creatSectionRight = document.createElement("section");
creatSectionRight.className = "right-content";
creatMain.appendChild(creatSectionRight);

const gettingImg = document.createElement("img");
gettingImg.src = "https://picsum.photos/200";
gettingImg.className = "small-image";
creatSectionLeft.appendChild(gettingImg);

const creatUl = document.createElement("ul");
creatSectionRight.appendChild(creatUl);
let numeroExtenso = [
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
for (let index = 0; index < numeroExtenso.length; index += 1) {
  const creatIl = document.createElement("li");
  creatIl.innerHTML = numeroExtenso[index];
  creatUl.appendChild(creatIl);
}

for (let index = 0; index < 3; index += 1) {
  const creatH3 = document.createElement("h3");
  creatMain.appendChild(creatH3);
}

const blabla = document.getElementsByTagName("h3");
for (let index = 0; index < blabla.length; index += 1) {
  blabla[index].className = "description";
}
h1damassa.className = "title";

creatMain.removeChild(creatSectionLeft);

creatSectionRight.style.marginRight = "auto";

creatSection.style.backgroundColor = "green";

const deleteIl = document.getElementsByTagName("ul")[0];

deleteIl.lastChild.remove();
deleteIl.lastChild.remove();

// const saaa = document.querySelector(
//   "#peito > main > section.right-content > ul > li:nth-child(9)"
// );

// creatUl.removeChild(saaa);

// const deleteIl = document.querySelector(
//   "#peito > main > section.right-content > ul > li:nth-child(9)"
// );
// creatUl.removeChild(deleteIl);
