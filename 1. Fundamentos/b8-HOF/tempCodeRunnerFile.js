function book60() {
  const anoCorrente = new Date().getFullYear();
  return books.filter((book) => (
    book.releaseYear < anoCorrente - 60
  )).sort((bookA, bookB) => (
    bookA.releaseYear - bookB.releaseYear));
  };

  console.log(book60());