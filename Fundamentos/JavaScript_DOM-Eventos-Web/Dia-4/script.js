const getBody = document.getElementsByTagName("body")[0];
const salvaWebStorage = () => {
  localStorage.setItem("salva", getBody.style.backgroundColor);
  localStorage.setItem("salva-color", getBody.style.color);
  localStorage.setItem("salva-pixel", getBody.style.fontSize);
  localStorage.setItem("salva-espacamento", getBody.style.lineHeight);
  localStorage.setItem("salva-fontFamily", getBody.style.fontFamily);
};
const backgroundColorOfSite = (cor) => {
  const corDeFundo = document.getElementById("cor-de-fundo");
  const buttonCreate = document.createElement("button");
  buttonCreate.innerText = cor;

  corDeFundo.appendChild(buttonCreate);
  buttonCreate.addEventListener("click", () => {
    getBody.style.backgroundColor = cor;
    salvaWebStorage();
  });
};
const coresBackground = () => {
  backgroundColorOfSite("pink"),
    backgroundColorOfSite("blue"),
    backgroundColorOfSite("green"),
    backgroundColorOfSite("unset");
};
const colorOfParagraph = (cor) => {
  const corParagrafo = document.getElementById("cor-do-texto");
  const buttonCreate = document.createElement("button");
  buttonCreate.innerText = cor;

  corParagrafo.appendChild(buttonCreate);
  buttonCreate.addEventListener("click", () => {
    getBody.style.color = cor;
    salvaWebStorage();
  });
};
const colorText = () => {
  colorOfParagraph("pink"),
    colorOfParagraph("grey"),
    colorOfParagraph("yellow");
  colorOfParagraph("unset");
};
const fontSize = (pxFonte) => {
  const getFont = document.getElementById("tamanho-da-fonte");
  const buttonCreate = document.createElement("button");
  buttonCreate.innerText = pxFonte;

  getFont.appendChild(buttonCreate);
  buttonCreate.addEventListener("click", () => {
    getBody.style.fontSize = pxFonte;
    salvaWebStorage();
  });
};
const fontOnload = () => {
  fontSize("10px");
  fontSize("20px");
  fontSize("30px");
  fontSize("unset");
};
const espacamentoFont = (espacamento) => {
  const getEspacamento = document.getElementById("espacamento");
  const buttonCreate = document.createElement("button");
  buttonCreate.innerText = espacamento;

  getEspacamento.appendChild(buttonCreate);
  buttonCreate.addEventListener("click", () => {
    getBody.style.lineHeight = espacamento;
    salvaWebStorage();
  });
};
const espacamentoOnload = () => {
  espacamentoFont("10px");
  espacamentoFont("17px");
  espacamentoFont("24px");
  espacamentoFont("unset");
};
const styleFont = (style) => {
  const fontID = document.getElementById("tipo-da-fonte");
  const buttonCreate = document.createElement("button");
  buttonCreate.innerText = style;

  fontID.appendChild(buttonCreate);
  buttonCreate.addEventListener("click", () => {
    getBody.style.fontFamily = style;
    salvaWebStorage();
  });
};
const styleFontOnload = () => {
  styleFont("Arial");
  styleFont("Fantasy");
  styleFont("monospace");
  styleFont("cursive");
};
const returnWebStorage = () => {
  getBody.style.backgroundColor = localStorage.getItem("salva");
  getBody.style.color = localStorage.getItem("salva-color");
  getBody.style.fontSize = localStorage.getItem("salva-pixel");
  getBody.style.lineHeight = localStorage.getItem("salva-espacamento");
  getBody.style.fontFamily = localStorage.getItem("salva-fontFamily");
};
window.onload(
  coresBackground(),
  colorText(),
  fontOnload(),
  espacamentoOnload(),
  styleFontOnload(),
  returnWebStorage()
);
