const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direction) {
    (direction || typeof direction === 'undefined') ? this.type = true : this.type = direction;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  showError() {
    throw new Error('Incorrect arguments!');
  }

  keyGenerator(t, k) {
    let key = '';
    let sms = '';
    let count = 0;
    while (key.length < t.split(' ').join('').length) {
      key += k;
    }
    for (let i = 0; i < t.length; i++) {
      if (!this.alphabet.includes(t[i])) {
        sms += t[i];
        count++;
        continue;
      }
      sms += key[i - count];
    }
    return sms.toUpperCase();
  }

  encrypt(m, k) {
    if (!m || !k) {
      this.showError();
      return;
    }

    m = m.toUpperCase();
    let result = '';

    let key = this.keyGenerator(m, k);

    if (this.type) {
      for (let i = 0; i < m.length; i++) {
        if (!this.alphabet.includes(m[i])) {
          result += m[i];
          continue;
        }
        let c = ((this.alphabet.indexOf(m[i]) + this.alphabet.indexOf(key[i])) % this.alphabet.length + 1) - 1;
        result += this.alphabet[c];
      }
    } else {
      for (let i = m.length - 1; i >= 0; i--) {
        if (!this.alphabet.includes(m[i])) {
          result += m[i];
          continue;
        }
        let c = ((this.alphabet.indexOf(m[i]) + this.alphabet.indexOf(key[i])) % this.alphabet.length + 1) - 1;
        result += this.alphabet[c];
      }
    }

    this.eCrypt = result;
    return result;
  }

  decrypt(c, k) {
    if (!c || !k) {
      this.showError();
      return;
    }

    c = c.toUpperCase();
    let result = '';

    let key = this.keyGenerator(c, k);

    if (this.type) {
      for (let i = 0; i < c.length; i++) {
        if (!this.alphabet.includes(c[i])) {
          result += c[i];
          continue;
        }
        let d = ((this.alphabet.indexOf(c[i]) - this.alphabet.indexOf(key[i])) % this.alphabet.length + 1) - 1;
        if (d < 0) {
          d = this.alphabet.length + d;
        }
        result += this.alphabet[d];
      }
    } else {
      for (let i = c.length - 1; i >= 0; i--) {
        if (!this.alphabet.includes(c[i])) {
          result += c[i];
          continue;
        }
        let d = ((this.alphabet.indexOf(c[i]) - this.alphabet.indexOf(key[i])) % this.alphabet.length + 1) - 1;
        if (d < 0) {
          d = this.alphabet.length + d;
        }
        result += this.alphabet[d];
      }
    }

    this.dCrypt = result;
    return result;
  }

}

module.exports = {
  VigenereCipheringMachine
};
