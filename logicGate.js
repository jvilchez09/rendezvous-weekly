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
  const allowed = [0, 1];

  if (allowed.indexOf(signalOne) === -1)
    throw new Error("El primer número debe ser 0 ó 1");
  const checkSecond = () => {
    if (allowedValues.indexOf(signalTwo) === -1)
      throw new Error("El segundo número debe ser 0 ó 1");
  };

  if (gate === "AND") {
    checkSecond();
    return signalOne && signalTwo ? 1 : 0;
  } else if (gate === "OR") {
    checkSecond();
    return signalOne || signalTwo ? 1 : 0;
  } else if (gate === "NOT") {
    return Number(!signalOne);
  } else if (gate === "NAND") {
    checkSecond();
    return signalOne && signalTwo ? 0 : 1;
  } else if (gate === "NOR") {
    checkSecond();
    return !signalOne && !signalTwo ? 1 : 0;
  } else if (gate === "XOR") {
    checkSecond();
    return signalOne !== signalTwo ? 1 : 0;
  } else if (gate === "XNOR") {
    checkSecond();
    return signalOne === signalTwo ? 1 : 0;
  } else {
    return "Puerta no reconocida";
  }
};

console.log(logicGate("NOT", 1));
