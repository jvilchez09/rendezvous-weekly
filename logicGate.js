"use strict";

/**
 * Write a program that implements logic gates AND, OR, NOT, NAND, NOR, XOR, and XNOR.
 * AND: verdadero si ambos son verdaderos
 * OR: verdadero si ambos son verdaderos o si uno de los dos es verdadero
 * Not: regresa el inverso
 * NAND: Falso si ambos son verdaderos
 * NOR: verdadero si ambos son falsos
 * XOR: verdadero si ambos son diferentes
 * XNOR: Verdadero si ambos son iguales
 */

const logicGate = (gate, signalOne, signalTwo = null) => {
  if (gate === "AND") {
    return signalOne && signalTwo ? 1 : 0;
  } else if (gate === "OR") {
    return signalOne || signalTwo ? 1 : 0;
  } else if (gate === "NOT") {
    return Number(!signalOne);
  } else if (gate === "NAND") {
    return signalOne && signalTwo ? 0 : 1;
  } else if (gate === "NOR") {
    return !signalOne && !signalTwo ? 1 : 0;
  } else if (gate === "XOR") {
    return signalOne !== signalTwo ? 1 : 0;
  } else if (gate === "XNOR") {
    return signalOne === signalTwo ? 1 : 0;
  }
};

console.log(logicGate("NOT", 1));
