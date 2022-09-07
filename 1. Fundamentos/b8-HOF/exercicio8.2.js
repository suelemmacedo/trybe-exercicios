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

//1 
function authorBornIn1947() {
return books.find((book) => book.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947());

//2

function smallerName() {
  let nameBook; // criando uma variável pra colocar o menor nome de livro (a variável assim está vazia). Quando se usa o !nameBook traz que não é verdade a variável vazia e o primeiro nome do livro ocupa o lugar.
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  return nameBook;
}
console.log(smallerName());

//3
function findName() {
  return books.find((book) => book.name.length === 26);
};
console.log(findName());

//4
function ordemDecrescente() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear );
}
console.log(ordemDecrescente());

//5

function nascAutoras() {
  return books.every((book) => (book.author.birthYear >= 1901 && book.author.birthYear <= 2000));
}
console.log(nascAutoras());

//6
function booklanc80() {
  return books.some((book) => (book.releaseYear >= 1980 && book.releaseYear <= 1989));
}
console.log(booklanc80());

//7 ???
function authorUnique() {
  return books.every((book) => 
  !books.some((bookSome) => 
  (bookSome.author.birthYear === book.author.birthYear) 
  && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());