const mavi = require("mavi-utils");

// String Utilities
console.log(mavi.stringUtils.lowerCase("HELLO WORLD")); // Output: 'hello world'

// Math Utilities
console.log(mavi.mathUtils.gcd(8, 12)); // Output: 4

// File System Helpers
mavi.fileUtils.writeFile("example.txt", "Hello, World!");

// Validation Utilities
console.log(mavi.validationUtils.isValidEmail("test@example.com")); // Output: true

// Random Data Generator
console.log(mavi.randomDataGenerator.getRandomEmail()); // Output: Random email
