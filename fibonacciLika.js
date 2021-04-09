"use strict";

/**
 * Given an array of increasing integers,
 * find the length of the longest fibonacci-like subsequence of the array.
 * If one does not exist, return 0. A sequence is “fibonacci-like” if X_i + X_{i+1} = X_{i+2}.
 */

const fibonacciLike = (array) => {
  let firstI;
  let counter = array.length;

  array.forEach((e, index) => {
    firstI = e;
    let fiboLikes = [];
    let longestFiboLike = 0;

    console.log(index);
    console.log(fiboLikes);

    for (let j = index + 1; j < counter; j++) {
      for (let k = 0; k < array.length; k++) {
        const element = array[k];
      }

      if (firstI + array[index + 1] === array[index + 2]) {
        fiboLikes.push(firstI, array[index + 1], array[index + 2]);
        firstI = array[index + 2];
      }
      const element = array[index];
    }

    console.log(fiboLikes);
  });
};

fibonacciLike([1, 3, 7, 11, 12, 14, 18]);
