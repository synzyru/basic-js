const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let arr1 = arr.slice(0).filter(Boolean);
  arr1.forEach((e, i) => {
    if (e === '--discard-next') {
      if (i < arr1.length - 1) arr1 = arr1.slice(0, i).concat(arr1.slice(i+2));
      else arr1 = arr1.slice(0,i);
    }
    else if (e === '--discard-prev') {
      if (arr[i-2] === '--discard-next') arr1 = arr1.slice(0, i-2).concat(arr1.slice(i-1));
      else if (i > 0) arr1 = arr1.slice(0, i-1).concat(arr1.slice(i+1));
      else arr1 = arr1.slice(1);
    }
    else if (e === '--double-next') {
      if (i < arr1.length - 1) arr1[i] = arr[i+1];
      else arr1 = arr1.slice(0,i);
    }
    else if (e === '--double-prev') {
      if (arr[i-2] === '--discard-next') arr1 = arr1.slice(0, i-2).concat(arr1.slice(i-1));
      else if (i > 0) arr1[i] = arr[i-1];
      else arr1 = arr1.slice(1);
    };
  });
  return arr1;
}

module.exports = {
  transform
};
