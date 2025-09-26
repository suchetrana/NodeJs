import {binarySearch as bs, linearSearch as ls} from "./searching.mjs"; // named export

import {bubbleSort as bSort, insertionSort as iSort} from "./sorting.mjs"; //named export

import quick from './quickSort.mjs'  // default export usage

console.log(ls([1, 2, 3, 4, 5, 6], 4));
console.log(bs([2, 5, 1, 7 ,2, 4, 8]));
let arr = bSort([9, 1, 3, 7, 9, 2, 1, 8, 6]);
let arr1 = iSort([9, 1, 3, 7, 9, 2, 1, 8, 6]);

let q = quick([9, 1, 3, 7, 9, 2, 1, 8, 6]);
console.log(q);