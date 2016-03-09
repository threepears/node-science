"use strict";

const chalk = require('chalk');
const util = require('util')

const arr = [1, 3, 5, 0, 6, 4, 2];
const arr2 = [4,2,7,6,8,9,5,10,34,23,67,3];

function swap (array, index1, index2) {
  const temp = array[index1];

  array[index1] = array[index2];
  array[index2] = temp;
}

// function bubbleSort (array) {
//   for (let j = 1; j < array.length; j++) {
//     for (let i = 0; i < array.length - j; i++) {
//       if (array[i] > array[i+1]) {
//         swap(array, i, i + 1);
//         console.log(chalk.red(util.inspect(array)));
//       }
//       console.log(chalk.dim(util.inspect(array)));
//     }
//   }
//   return array;
// }

// If less than the one to the left, move to left; keep moving to left until not true

// function insertionSort (array) {
//   for (let i = 1; i < array.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (array[j - 1] > array[j]) {
//         swap(array, j - 1, j);

//         console.log(chalk.red(util.inspect(array)));
//       } else {
//         console.log(chalk.dim(util.inspect(array)));
//       }
//     }
//   }
//   return array;
// }


function selectionSort (array) {
  for (let i = 0; i < array.length; i++) {
    let index = 0;
    let lowest = array[i];
    for (let j = i; j < array.length; j++) {

      if (array[j + 1] < lowest) {
        lowest = array[j + 1];
        index = j + 1;
      }
    }
    console.log(i);
    console.log(index);
    if (index > i) {
      swap(array, i, index);
    }
  }
  return array;
}

// console.log(bubbleSort(arr2));
console.log(selectionSort(arr2));
