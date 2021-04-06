// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/**
 * week 22-03-2021
 */
/*
const n = [3, 4, 6, 5];
const m = [9, 0, 2, 5, 8, 3];
const k = 5;

const maxNum = function (n, m, k) {
  let max = "";
  let o = n.concat(m).sort().reverse();
  for (let i = 0; i < k; i++) {
    max += o[i];
  }
  console.log(max);
};
maxNum(n, m, k);

*/

// $ 98655

/**
 * week 29-03-2021
 */

/**
 * Given a string, return true if the string represents a valid number. A valid number can include integers, a ., -, or +.
 * Examples of valid numbers: “7”, “0011”, “+3.14”, “4.”, “-.9”, “-123.456”, “-0.1”
 * Examples of invalid numbers: “abc”, “1a”, “e8”, “–6”, “-+3”, “95x54e53.”
 */
/*
function isValidNum(string) {
  let num = Number(string);
  if (typeof num === "number" && !isNaN(num)) return true;
  return false;
}
*/

// console.log(`${isValidNum(prompt("number"))}`);

/**
 * week 05-04-2021
 */

/**
 * This week’s question:
 * Given an integer n and a sorted array of prime integers called primes,
 * return the nth “super ugly number”. A “super ugly number” is a positive number
 * whose all prime factors are in the array primes.
 */

let n = 11; // 1;
let primes = [2, 7, 13, 19]; // [2, 3, 5];

const getNthUglyNumber = (n, primes) => {
  let ugliesList = [1];
  let i = 2;
  let currentNum;

  while (n > ugliesList.length) {
    currentNum = i;
    for (let j in primes) {
      while (currentNum % primes[j] === 0) {
        currentNum /= primes[j];
      }
      if (currentNum === 1) {
        ugliesList.push(i);
        break;
      }
    }
    i++;
  }
  return ugliesList[n - 1];
};

console.log(getNthUglyNumber(n, primes));

/*
const getNthUglyNumber = (n, primes) => {
  for (let i = 0; i < 100; i++) {
    currentNum = counter;
    for (let j in primes) {
      // console.log(counter);
      // console.log(currentNum);
      while (currentNum % primes[j] === 0) {
        currentNum /= primes[j];
      }
      if (currentNum === 1) {
        ugliesList.push(counter);
        break;
      }
    }
    counter++;
  }
  console.log(ugliesList);
};

// getNthUglyNumber(n, primesList);
*/
