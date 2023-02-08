import { nanoid } from "nanoid"
import copy from 'clipboard-copy'
import './style.css'
const passwordBtnEl = document.querySelector('button');

const displayPasswordEl = document.querySelector('h2');

const paragraph = document.querySelector('p')

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  paragraph.innerHTML = '';
})

displayPasswordEl.addEventListener('click', (e) => {
  copy(e.target.innerHTML)
  paragraph.innerHTML = 'Senha copiada';
})
