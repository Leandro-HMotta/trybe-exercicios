const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const techClassSelect = (event) => {
  const pegaEventoClass = document.querySelector(".tech");
  pegaEventoClass.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
};
firstLi.addEventListener("click", techClassSelect);
secondLi.addEventListener("click", techClassSelect);
thirdLi.addEventListener("click", techClassSelect);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const textFromInput = (event) => {
  const pegaEventoClass = document.querySelector(".tech");

  pegaEventoClass.innerHTML = event.target.value;
};

input.addEventListener("input", textFromInput);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const referenceSite = () => {
  window.open("https://www.youtube.com/watch?v=2P_esm8cNgU");
};

myWebpage.addEventListener("dblclick", referenceSite);

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

const colorOfMySpotrybefy = () => {
  myWebpage.style.color = "pink";
};

myWebpage.addEventListener("mouseover", colorOfMySpotrybefy);

const colorOfMySpotrybefyWhite = () => {
  myWebpage.style.color = "unset";
};
myWebpage.addEventListener("mouseleave", colorOfMySpotrybefyWhite);
// Segue abaixo um exemplo do uso de event.target:

// const resetText = (event) => { -----
// O Event é passado como um parâmetro para a função.
// event.target.innerText = input.value; -----
// O event possui várias propriedades, porém a mais usada é o event.target,
// que retorna o objeto que disparou o evento.
// };

// firstLi.addEventListener("dblclick", resetText); ------

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
