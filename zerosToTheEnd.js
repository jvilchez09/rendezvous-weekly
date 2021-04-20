"use strict";

/**Given an integer array, move all 0s to the end of it
 * while maintaining the relative order of the non-zeroes.
 * Bonus: do this without making a copy of the array!
 * */

const moveZeroes = (arr) => {
  let positions = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === 0) {
      positions.push(i);
    }
  }
  positions.forEach((position) => {
    arr.splice(position - j, 1);
    arr.push(0);
    j++;
  });
  return arr;
};
console.log(moveZeroes([0, 2, 0, 3, 8]));
// [2,3,8,0,0]
