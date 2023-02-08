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

const ExpandeDias = () => {
  const day = document.getElementsByClassName("day");
  for (let index = 0; index < day.length; index += 1) {
    day[index].addEventListener("mouseover", () => {
      day[index].style.fontSize = "28px";
    });
    day[index].addEventListener("mouseleave", () => {
      day[index].style.fontSize = "20px";
    });
  }
};

const tarefas = (param) => {
  const paiTarefas = document.querySelector(".my-tasks");
  const criaSpan = document.createElement("span");
  criaSpan.innerText = param;
  paiTarefas.appendChild(criaSpan);
};

const legendColor = (cor) => {
  const paiTarefas = document.querySelector(".my-tasks");
  const criaDiv = document.createElement("div");
  criaDiv.className = "task";
  criaDiv.style.backgroundColor = cor;
  paiTarefas.appendChild(criaDiv);
};

const taskSelected = () => {
  const pegaTask = document.getElementsByClassName("task");
  for (let index = 0; index < pegaTask.length; index += 1) {
    pegaTask[index].addEventListener("click", (event) => {
      const selected = document.querySelector(".selected"); // ate aqui nao tinha nenhum // Pega a class
      if (selected) {
        selected.classList.remove("selected");
      } else {
        event.target.classList.add("selected"); // quando eu clicar ele adiciona
      }
    });
  }
};

const setDayColor = () => {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", (event) => {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = "rgb(119,119,119)"; // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
};

window.onload = () => {
  criandoLi();
  ExpandeDias();
  tarefas("cozinhar");
  legendColor("green");
  legendColor("blue");
  legendColor("grey");
  taskSelected();
  setDayColor();
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
