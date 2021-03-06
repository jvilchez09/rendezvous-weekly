"use strict";

/**
 * Given an array of 0s and 1s that represent a garden,
 * where 0 is a plot that hasn’t been planted on,
 * and 1 is a plot that has been planted on,
 * return true if n plants can be planted without touching another plant.
 */

let garden = [1, 0, 0, 0, 1];

const canPlant = (garden, seeds) => {
  let i = 0,
    planted = 0;
  garden.forEach((pot) => {
    if (pot === 0) {
      if (!garden[i + 1] && !garden[i + 2]) {
        garden[i + 1] = 1;
        planted++;
      }
    }
    i++;
  });
  return planted >= seeds ? true : false;
};

console.log(canPlant(garden, 1));
