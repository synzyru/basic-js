const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let str1 = str.slice(0, i) + str.slice(i + 1);
    arr.push(str1);
  }
  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit
};
