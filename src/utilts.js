const fs = require("fs");

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

function appendToFile(filePath, content) {
  fs.appendFileSync(filePath, content);
}

function validateFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return { valid: false, message: "File does not exist" };
  }

  const stats = fs.statSync(filePath);
  if (stats.size > 5000000) {
    // 5MB limit
    return { valid: false, message: "File is too large" };
  }

  return { valid: true, message: "File is valid" };
}

module.exports = {
  readFile,
  writeFile,
  appendToFile,
  validateFile,
};
