const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const verifyAuthorByBirthYear = (age) =>
  books.find((element) => element.author.birthYear === age).author.name;

console.log(verifyAuthorByBirthYear(1890));

const smallerBookName = () => {
  let nameBook = books[0].name;
  books.forEach((element) => {
    if (element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  });
  return nameBook;
};

console.log(smallerBookName());

const verifyBookLength = (leng) =>
  books.find((element) => element.name.length === leng);

console.log(verifyBookLength(4));

const everyoneWasBOrnOnSecXX = () =>
  books.every(
    (element) =>
      element.author.birthYear > 1901 && element.author.birthYear < 2001
  );
console.log(everyoneWasBOrnOnSecXX());

const bookReleaseOnThe80s = () =>
  books.some(
    (element) => element.releaseYear <= 1989 && element.releaseYear >= 1980
  );
console.log(bookReleaseOnThe80s());

const authorBornInSameYear = () => {
  return books.every((element) => {
    books.some((elem) => {
      elem.author.birthYear === element.author.birthYear &&
        elem.author.name !== element.author.name;
    });
  });
};

console.log(authorBornInSameYear());
