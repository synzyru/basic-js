const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The ob should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let ob = {};
  for (let i = 0; i < domains.length; i++) {
    let subDomains = domains[i].split('.').reverse();
    let checkingDomain = '';
    for (let j = 0; j < subDomains.length; j++) {
      checkingDomain += "."+subDomains[j];
      (ob[checkingDomain]) ? ob[checkingDomain]++ : ob[checkingDomain] = 1;
    }
  }
  return ob;
}

module.exports = {
  getDNSStats
};
