// src/randomDataGenerator.js

function getRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "outlook.com"];
  const name = getRandomString(5);
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${name}@${domain}`;
}

module.exports = {
  getRandomString,
  getRandomNumber,
  getRandomEmail,
};
