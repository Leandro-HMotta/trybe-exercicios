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

const fic = books.filter((element) => element.genre === 'Fantasia'
  || element.genre === 'Ficção Científica');


// console.log(fic);

const oldBookSort = () => {
  const data = new Date().getFullYear()
  return books.filter((element) => (data - element.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear)
};

// console.log(oldBookSort());

const livroByAutor = (birth) => books.filter((element) => element.author.birthYear === birth).map((elem) => elem.name);

// console.log(livroByAutor(1920));


const nameOfFicAndFantasy = fic.map((elem) => elem.author.name).sort();

// console.log(nameOfFicAndFantasy);

const nameOfBooks = oldBookSort().map((elem) => elem.name);

// console.log(nameOfBooks);

const authorWith3DotsOnName = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
};

// console.log(authorWith3DotsOnName());

