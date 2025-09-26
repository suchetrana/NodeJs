const searchFunction = require('./searching');

const {linearSearch: ls} = require('./searching');   // linearSearch: ls -> alias for linearSearch is ls;

const {bubbleSort: bs} = require('./sorting') // named export

const QuickSort = require('/quickSort'); // default export
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 4));
console.log(ls([1, 2, 3, 4, 5, 6], 4));
console.log(bs([2, 5, 1, 7 ,2, 4, 8]));
console.log(searchFunction);