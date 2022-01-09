import * as types from "../types";
import { SEESAW_MAX_BENDING_PERCENTAGE } from "../../utils/constants";

export const toggle = () => {
  return {
    type: types.TOGGLE,
  };
};
export const insertRightElement = () => {
  return {
    type: types.INSERT_RIGHT_ELEMENT,
  };
};
export const insertLeftElement = () => {
  return {
    type: types.INSERT_LEFT_ELEMENT,
  };
};
export const moveRight = () => {
  return {
    type: types.MOVE_RIGHT,
  };
};
export const getPower = (elements) => {
  return elements.reduce((total, element) => {
    return (total += element.weight * element.offset);
  }, 0);
};
export const getTotalLeft = (state) => {
  return getPower(state.leftElements);
};

export const getTotalRight = (state) => {
  return getPower(state.rightElements);
};

export const getBending = (state) => {
  console.log(state);
  const totalLeft = getTotalLeft(state);
  const totalRight = getTotalRight(state);
  if (!totalLeft) {
    return SEESAW_MAX_BENDING_PERCENTAGE;
  } else {
    return totalLeft > totalRight
      ? ((totalLeft - totalRight) / totalLeft) * -100
      : ((totalRight - totalLeft) / totalRight) * 100;
  }
};
