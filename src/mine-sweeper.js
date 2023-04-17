const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The res should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    res[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let counter = 0;
      if (j > 0 && matrix[i][j - 1] === true) counter++;
      if (j < matrix[i].length - 1 && matrix[i][j + 1] === true) counter++;
      if (i > 0) {
        if (matrix[i - 1][j] === true) counter++;
        if (j > 0 && matrix[i - 1][j - 1] === true) counter++;
        if (j < matrix[i - 1].length - 1 && matrix[i - 1][j + 1] === true)
          counter++;
      }
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j] === true) counter++;
        if (j > 0 && matrix[i + 1][j - 1] === true) counter++;
        if (j < matrix[i + 1].length - 1 && matrix[i + 1][j + 1] === true)
          counter++;
      }
      res[i][j] = counter;
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
