import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
 
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const NEXT_COLOR = "NEXT_COLOR";
const RANDOM_COLOR= "RANDOM_COLOR";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}


const reducer = (state = INITIAL_STATE, action) => {
switch(action.type) {

case NEXT_COLOR: 
return {
  ...state,
  index: state.index === (state.colors.length - 1) ? 0 : state.index + 1,
}
case PREVIOUS_COLOR:
  return {
    ...state,
    index: state.index === 0 ? (state.colors.length - 1) : state.index -1,
  }
case RANDOM_COLOR:
  return {
    ...state,
    colors:[...state.colors, criarCor() ],
    index: state.colors.length,
  }
  default: 
  return state;
}
};

const nextAction = { type: NEXT_COLOR };
const previosAction = { type: PREVIOUS_COLOR };
const randomAction = { type: RANDOM_COLOR };


const store = createStore(reducer, composeWithDevTools());

const nextbutton = document.querySelector("#next");
const previosbutton = document.querySelector("#previous");
const randombutton = document.querySelector("#random");
const container = document.querySelector("#container")
const value = document.querySelector("#value")


nextbutton.addEventListener("click" , () => {
  store.dispatch(nextAction);
});
previosbutton.addEventListener("click" , () => {
  store.dispatch(previosAction);
});
randombutton.addEventListener("click" , () => {
  store.dispatch(randomAction);
});

store.subscribe(() => {
  const { colors , index } = store.getState();

  value.innerHTML = colors[index] ;
  container.style.background = colors[index] ;
})