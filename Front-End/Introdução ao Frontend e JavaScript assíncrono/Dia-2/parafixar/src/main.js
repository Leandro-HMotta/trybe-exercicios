import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');
console.log(usersSelect.value)

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  });

usersSelect.addEventListener('change', () => {
  clearPageData();
  const post_api = `https://dummyjson.com/posts/user/${usersSelect.value}`

  fetch(post_api)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);
      console.log(posts)
      const [vascodagama] = posts;
      console.log(vascodagama);
      const url = `https://dummyjson.com/posts/${vascodagama.id}/comments`;
      return fetch(url)
    }).then((res) => res.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    .catch((error) => {
      fillErrorMessage('Erro ao recuperar informações');
      console.log(error.message);
    });
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
