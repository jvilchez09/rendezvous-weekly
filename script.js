// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/**
 * week 22-03-2021
 */

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
// $ 98655

/**
 * week 29-03-2021
 */

/**
 * Given a string, return true if the string represents a valid number. A valid number can include integers, a ., -, or +.
 * Examples of valid numbers: “7”, “0011”, “+3.14”, “4.”, “-.9”, “-123.456”, “-0.1”
 * Examples of invalid numbers: “abc”, “1a”, “e8”, “–6”, “-+3”, “95x54e53.”
 */

function isValidNum(string) {
  let num = Number(string);
  if (typeof num === "number" && !isNaN(num)) {
    return true;
  }
  return false;
}
console.log(`${isValidNum(prompt("number"))}`);
