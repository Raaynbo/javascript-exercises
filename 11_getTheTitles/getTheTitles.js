const getTheTitles = function(book_array) {
  // an array of books[title, author] is passed as an arg called "book_array"
  // create an array variable called titles , titles will be empty at first
  // explore book_array and get titles name into titles

  const titles = [];
  book_array.map(book => titles.push(book.title));
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
