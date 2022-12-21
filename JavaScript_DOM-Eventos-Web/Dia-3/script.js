const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const criandoLi = () => {
  const pegandoUL = document.getElementById("days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const criarLi = document.createElement("li");
    criarLi.className = "day";
    criarLi.innerText = decemberDaysList[index];
    pegandoUL.appendChild(criarLi);
    if (
      decemberDaysList[index] === 24 ||
      decemberDaysList[index] === 25 ||
      decemberDaysList[index] === 31
    ) {
      criarLi.classList.add("holiday");
    }
  }
  sextasCheiras();
};

const sextasCheiras = () => {
  for (let index = 5; index < decemberDaysList.length; index += 7) {
    const pegandoSextas = document.getElementsByClassName("day");

    pegandoSextas[index].classList.add("friday");
  }
};

const createBtn = (Feriados, id, fun) => {
  const getingDivPai = document.querySelector(".buttons-container");
  const button = document.createElement("button");
  button.id = id;
  button.innerHTML = Feriados;
  getingDivPai.appendChild(button);
  button.addEventListener("click", fun);
};

const changeCollor = () => {
  const buttoncollor = document.getElementsByClassName("holiday");
  for (let index = 0; index < buttoncollor.length; index += 1) {
    if (buttoncollor[index].style.background === "pink") {
      buttoncollor[index].style.background = "unset";
    } else {
      buttoncollor[index].style.background = "pink";
    }
  }
};

const changeInnerTextFridays = (sexta) => {
  const fridayArray = document.getElementsByClassName("friday");
  const pegaBotão = document.getElementById("btn-friday");

  pegaBotão.addEventListener("click", () => {
    for (let index = 0; index < fridayArray.length; index += 1) {
      if (fridayArray[index].innerText === "Sextouu!!!") {
        fridayArray[index].innerText = sexta[index];
      } else {
        fridayArray[index].innerText = "Sextouu!!!";
      }
    }
  });
};

const sextaArrays = ["4", "11", "18", "25"];

window.onload = () => {
  criandoLi();
  createBtn("Feriados", "btn-holiday", changeCollor);
  createBtn("Sexta-Feira", "btn-friday");
  changeInnerTextFridays(sextaArrays);
  funcaoBotaoFeriados();
};

// function criandoDays() {
//   const decemberDaysList = [
//     29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//     20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
//   ];
//   const gettingUL = document.getElementById("days");

//   for (index = 0; index < decemberDaysList.length; index += 1) {
//     const days = decemberDaysList[index];

//     const createLi = document.createElement("li");
//     createLi.className = "day";
//     createLi.innerHTML = days;
//     if (Number(createLi.innerHTML) > 23 && Number(createLi.innerHTML) < 26) {
//       createLi.classList.add("holiday");
//     }
//     if (Number(createLi.innerHTML) === 31) {
//       createLi.classList.add("holiday");
//     }

//     gettingUL.appendChild(createLi);
//   }

//   for (index1 = 5; index1 < decemberDaysList.length; index1 += 7) {
//     const getLi = document.getElementsByClassName("day");

//     getLi[index1].classList.add("friday");
//   }
// }
// function creatingButton(feriados, id) {
//   const createButton = document.createElement("button");
//   createButton.id = id;
//   createButton.innerHTML = feriados;
//   const pai = document.getElementsByClassName("buttons-container")[0];
//   pai.appendChild(createButton);
// }

// function changingCollor() {
//   const holi = document.getElementsByClassName("holiday");
//   for (index = 0; index < holi.length; index += 1) {
//     holi[index].style.color = "pink";
//   }
// }z'--

// creatingButton("Sexta-Feira", "btn-friday");

// // document.getElementById("btn-holiday").addEventListener("click");

// const sexta = document.getElementById("btn-friday");

// const changingSexta = () => {
//   const test = document.getElementsByClassName("friday");
//   for (let index = 0; index < test.length; index += 1) {
//     test[index].innerHTML = "rodrigueira calça 48";
//   }
// };
// sexta.addEventListener("click", changingSexta);

// window.onload = () => {
//   criandoDays();
//   changingCollor();
//   creatingButton("Feriados", "btn-holiday");
// };
