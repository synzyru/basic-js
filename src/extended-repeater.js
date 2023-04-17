const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let str1;
  let arr = [];
  let newArr = []
  if(!options.separator) options.separator = "+";
  if(!options.additionSeparator) options.additionSeparator = '|';
  if(!options.repeatTimes) options.repeatTimes = 1;
  if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if(options.addition === null) options.addition = "null";
  
  
  for(let i = 0; i < options.additionRepeatTimes; i++) {
    arr.push(options.addition);
  }

  let unit = str + arr.join(options.additionSeparator);
  
  for(let i = 0; i < options.repeatTimes; i++) {
    newArr.push(unit);
  }

  str1 = newArr.join(options.separator);
  return str1;
}

module.exports = {
  repeater
};
