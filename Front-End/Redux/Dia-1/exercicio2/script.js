import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


const LIGHT_THEME = "LIGHT_THEME";
const ONLINE_STATUS = "ONLINE_STATUS";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reduce = (state = INITIAL_STATE, action ) => {

  switch(action.type) {
    case LIGHT_THEME:
      return{
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      }
    case ONLINE_STATUS:
      return{
        ...state,
        status: state.status === 'offline' ? "online" : 'offline',
      }
   
      default:
        return state;
  }
};
const store = createStore(reduce, composeWithDevTools());

const ligthActionTheme = {type: LIGHT_THEME } 
const onlineActionStatus = {type: ONLINE_STATUS } 


const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const para = document.querySelector('p');
const spanStatus = document.querySelector("#status")

themeButton.addEventListener('click', () => {
  // coloque o código aqui.
  store.dispatch(ligthActionTheme);
  // store.dispatch(darkActionTheme);
});

statusButton.addEventListener('click', () => {
  // coloque o código aqui.
  store.dispatch(onlineActionStatus)
});

store.subscribe(() => {
  const {status , theme } = store.getState();
  if (theme === "light"){
    themeButton.innerHTML = "Dark Mode";
    body.style.background = "white";
    h1.style.color = "black"
    para.style.color = "black"
  } else {
    themeButton.innerHTML = "Light Mode";
    body.style.background = "gray";
    h1.style.color = "white"
    para.style.color = "white"
  }
  if(status === "online") {
    statusButton.innerHTML = "Ficar Offline";
    spanStatus.innerHTML = "Online";
  } else {
    statusButton.innerHTML = "Ficar Online";
    spanStatus.innerHTML = "Offline";
  }
});
