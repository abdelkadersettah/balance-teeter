# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to

**Running the development server**

    $ npm install && npm start

**Running the test runner**

    $ npm test

**Building the application for production**

    $ npm run build

## Todos

1. Writing tests
2. Increasing game speed only based on the successful rounds
3. Implementing other bonus problems
4. Showing the gameover reason to the user
5. Prevent the game from being overed by stopping the mistaken element choice
6. Performance monitoring
7. Lots of bug fixes (including functional and browser compatibility issues)

## Instructions

In this project, we expect you to create a standing in balance teeter totter.

- At the right side of teeter totter, there will be randomly placing objects with random weights. On the left side, there will be nothing but there will be
  objects falling from top to bottom. According to weight on the sides, teeter
  totter will be bending towards to heavy side.
- You will be managing those object’s placement by arrow keys to keep teeter
  totter on balance.
- Your task is, keeping this balance as much as you can.

### Rules:

- The width of teeter totter will be 10m .
- There will be three different object type with different weights. Triangle,
  circle and rectangle.
- On the left side , only falling objects can be placed. You will be controlling
  objects with arrow keys . The placement of objects should keep balance as its
  best.
- On the right side , there will be randomly placing objects, which created
  randomly and placed randomly.
- The weights will be between 1 and 10 .
- The bending speed will be increasing or decreasing according to balance.
- The maximum bending percentage is %30 , if it exceeds this limit, simulation
  ends.
- If there is extra 20kgm (10kg \* 2m) on the one side, simulation ends
  immediately.
- Distance from center will be considered as factor when placing the objects to
  keep teeter totter on balance.
- There will be pause and continue feature. The simulation can be paused and
  can be resumed last paused state.
- Vuex store usage expected.
- Component design expected.
- You can use any color or styling.
