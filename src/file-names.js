const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let names1 = [];
  for (let i = 0; i < names.length; i++) {
    let count = 0;
    for (let j = i+1; i < names.length; i++) {
      if(names[i] === names[j]) {
        (count > 0) ? names1.push(names[i]+"("+count+")") : names1.push(names[i]);          
        count++
      } else names1.push(names[i]);
    }
  }
  return (Array.from(new Set(names1)).length !== names1.length) ? renameFiles(names1) : names1;
} 

module.exports = {
  renameFiles
};
