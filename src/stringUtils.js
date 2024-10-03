function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function lowerCase(str) {
  return str
    .split(" ")
    .map((word) => word.toLowerCase())
    .join(" ");
}

function upperCase(str) {
  return str
    .split(" ")
    .map((word) => word.toUpperCase())
    .join(" ");
}

function trimString(str) {
  return str.trim();
}

function padString(str, length, char = " ") {
  return str.padEnd(length, char);
}

function countVowels(str) {
  const vowels = str.match(/[aeiouAEIOU]/g);
  return vowels ? vowels.length : 0;
}

function countConsonants(str) {
  const consonants = str.match(/[^aeiouAEIOU\s]/g);
  return consonants ? consonants.length : 0;
}

module.exports = {
  lowerCase,
  upperCase,
  titleCase,
  trimString,
  padString,
  countVowels,
  countConsonants,
};
