import './style.css';

import Swal from 'sweetalert2';

const getImg = document.querySelector('.fotinha');

const nomeHero = document.querySelector('h3');

const getButton = document.querySelector('button');

const id = () => Math.floor(Math.random() * 730 + 1);

const API_HEROES = () =>
  fetch(`https://superheroapi.com/api.php/5760611907390258/${id()}/image`).then(
    (response) => response.json()
  );

getButton.addEventListener('click', () => {
  API_HEROES()
    .then((data) => {
      const { name, url } = data;
      Swal.fire({
        imageUrl: url,
        title: name,
        imageHeight: '300px',
        width: '320px'
      });
      getImg.src = url;
      nomeHero.innerHTML = name;
    })
    .catch((error) =>
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        footer: '<a href="">Why do I have this issue?</a>',
      })
    );
});
