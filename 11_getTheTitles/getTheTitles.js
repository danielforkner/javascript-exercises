// help from https://stackoverflow.com/questions/64635476/can-i-use-filter-to-extract-values-from-an-array-of-objects

const getTheTitles = function(books) {
    return books
        .filter(book => book.title)
        .map(book => book.title)
};


let array = [
     {
      "author": "Name",
      "title": "Book",
    },
     {
      "author": "Name2",
      "title": "Book2",
    },
     {
      "author": "Name3",
    },
      ];

console.log(getTheTitles(array));


// Do not edit below this line
module.exports = getTheTitles;
