const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.getOwnPropertyNames(date).length > 0 || !date.getTime) throw new Error('Invalid date!');

  switch (Math.round(date.getMonth()/3)) {
    case 1:
      return 'spring';
    case 2:
      return 'summer';
    case 3:
      return 'autumn';
    default:
      return "winter";
  }
}

module.exports = {
  getSeason
};
