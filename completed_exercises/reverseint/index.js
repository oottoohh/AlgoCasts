// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

function reverseInt(n) {
  let reverseInt = 0;
  while (n != 0) {
    reverseInt = reverseInt * 10 + (n % 10);
    n = parseInt(n / 10); //without parseInt, JS will result this division as float.
  }
  return reverseInt;
}

module.exports = reverseInt;
