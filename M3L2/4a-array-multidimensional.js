//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

console.group('Declaring a multidimesional array (array-in-a-array')
const books = [
  ['A Tale of Two Cities', 'Charles Dickens', 'English', '1859', '200 million',], //not last comma in the array is ignored
  ['Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupéry', 'French', '1943', '150 million'],
  ["Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 'English', '1997', '120 million']];

console.log(books);
console.groupEnd();

console.group('Iterating over a multidimension array')

//using for..of loop
for (const book of books)
  for (const item of book)
    console.log(`${book}: item: ${item}`)

//using for..in  - is gives idx of every item will be given
for (const idxBook in books)
  for (const idxItem in books[idxBook])
    console.log(idxBook, idxItem, books[idxBook][idxItem]);

//using a classic for loop
for (let idxBook = 0; idxBook < books.length; idxBook++)
  for (let idxItem = 0; idxItem < books[idxBook].length; idxItem++)
    console.log(idxBook, idxItem, books[idxBook][idxItem]);


//using foreach and arror function
books.forEach((book) => {
  book.forEach((item) => (console.log(`${book}: item: ${item}`)))
});
console.groupEnd

//Exercise
//1. iterate over the two-dimensional array using array.prototype.map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//2. Create a tree dimensional array (think rubriks cube) and iterate over each element using  array.prototype.map
