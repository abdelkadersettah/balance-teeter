import * as types from "./types";

import generateRandomElement from "../utils/generateRandomObject";
const initialState = {
  ended: false,
  paused: true,
  leftElements: [],
  rightElements: [],
  fallingElements: [],
};
const seeSawReducer = (state = initialState, action) => {
  let randomElement = {};
  let fallingElements = [];
  switch (action.type) {
    case types.TOGGLE:
      return { ...state, paused: !state.paused };
    case types.INSERT_RIGHT_ELEMENT:
      randomElement = generateRandomElement();
      console.log(randomElement, "INSERT_RIGHT_ELEMENT");
      return {
        ...state,
        rightElements: [...state.rightElements, { ...randomElement }],
      };
    case types.INSERT_LEFT_ELEMENT:
      fallingElements = [...state.fallingElements];
      const leftElement = fallingElements.shift();
      return {
        ...state,
        fallingElements,
        leftElements: [...state.leftElements, leftElement],
      };
    case types.MOVE_RIGHT:
      if (
        state.paused ||
        (state.fallingElements &&
          state.fallingElements.length &&
          state.fallingElements[0].offset - 1 <= 0)
      )
        return state;
      fallingElements = [...state.fallingElements];
      if (fallingElements.length) fallingElements[0].offset -= 1;
      return {
        ...state,
        fallingElements,
      };
    case types.MOVE_LEFT:
      if (
        state.paused ||
        (state.fallingElements &&
          state.fallingElements.length &&
          state.fallingElements[0].offset + 1 <= 0)
      )
        return state;
      fallingElements = [...state.fallingElements];
      if (fallingElements.length) fallingElements[0].offset += 1;
      return {
        ...state,
        fallingElements,
      };
    case types.RESET:
      fallingElements = [...state.fallingElements];
      if (fallingElements.length) fallingElements[0].offset += 1;
      return initialState;

    default:
      return state;
  }
};

export default seeSawReducer;
