"use strict";

const chalk = require('chalk');
const util = require('util')

const arr = [1, 3, 5, 0, 6, 4, 2];
const arr2 = [4,2,7,6,8,9,5,10,34,23,67,3];

// Create Swap function
function swap (array, index1, index2) {
  const temp = array[index1];

  array[index1] = array[index2];
  array[index2] = temp;
}

// Implement Bubble Sort
function bubbleSort (array) {
  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i + 1);
        console.log(chalk.red(util.inspect(array)));
      }
      console.log(chalk.dim(util.inspect(array)));
    }
  }
  return array;
}


// Implement Insertion Sort
// If previous greater than the one to the right, swap; keep moving to left
function insertionSort (array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);

        console.log(chalk.red(util.inspect(array)));
      } else {
        console.log(chalk.dim(util.inspect(array)));
      }
    }
  }
  return array;
}

// Implement Selection Sort
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
    if (index > i) {
      swap(array, i, index);
    }
  }
  return array;
}

// Testing
console.log(selectionSort(arr));
console.log(selectionSort(arr2));
