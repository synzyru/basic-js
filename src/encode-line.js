const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) count++;
    else {
      if (count > 1) arr.push(count);
      arr.push(str[i]);
      count = 1;
    }
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
