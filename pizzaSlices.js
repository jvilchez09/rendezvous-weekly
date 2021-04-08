"use strict";

/**
 * Given an array of people objects (where each person has a name and a number of pizza slices they’re hungry for)
 * and a number for the number of slices that the pizza can be sliced into, return the number of pizzas you need to buy.
 */

let arr = [
  { name: "Joe", num: 9 },
  { name: "Cami", num: 3 },
  { name: "Cassidy", num: 4 },
  { name: "Jose", num: 4 },
  { name: "Jesus", num: 5 },
];

const gimmePizza = (arr, slicesPerPizza) => {
  let slicesWanted = 0;
  let totalPizas;
  arr.forEach((e) => (slicesWanted += e.num));
  return (totalPizas = Math.ceil(slicesWanted / slicesPerPizza));
};

console.log(`We will need: ${gimmePizza(arr, 8)} pizzas`);
