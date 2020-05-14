const alphabet = {
 'a': 0,
 'b': 1,
 'c': 2,
 'd': 3,
 'e': 4,
 'f': 5,
 'g': 6,
 'h': 7,
 'i': 8,
 'j': 9,
 'k': 10,
 'l': 11,
 'm': 12,
 'n': 13,
 'o': 14,
 'p': 15,
 'q': 16,
 'r': 17,
 's': 18,
 't': 19,
 'u': 20,
 'v': 21,
 'w': 22,
 'x': 23,
 'y': 24,
 'z': 25
}

function decryptString(string, house, pos) {
  if (pos < 1) {
    return '';
  } else {
    let stringDecrypted = decryptString(string, house, pos - 1);
    stringDecrypted += letterDecrypt(string[pos], house);
    return stringDecrypted;
  }
}

function letterDecrypt(letter, house) {
  if (alphabet.hasOwnProperty(letter)) {
    return Object.keys(alphabet)[Object.values(alphabet).indexOf(alphabet[letter] - house)];
  }
  return letter;
}

module.exports = {
  decrypt(string, house) {
    return decryptString(string, house, string.length - 1);
  }
}