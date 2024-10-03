const fs = require("fs");
const parse = require("csv-parse/lib/sync"); // You can use the csv-parse package
const { stringify } = require("csv-stringify/sync");

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

function readCSV(filePath) {
  const fileContent = fs.readFileSync(filePath);
  const records = parse(fileContent, {
    columns: true, // Use first row as header
    skip_empty_lines: true,
  });
  return records; // Returns an array of objects
}

function writeCSV(filePath, data) {
  const csvContent = stringify(data, { header: true });
  fs.writeFileSync(filePath, csvContent);
}

function readJSON(filePath) {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data); // Returns the parsed object
}

function writeJSON(filePath, data) {
  const jsonData = JSON.stringify(data, null, 2); // Pretty print with 2 spaces
  fs.writeFileSync(filePath, jsonData);
}

module.exports = {
  readFile,
  writeFile,
  appendToFile,
  validateFile,
  readCSV,
  writeCSV,
  readJSON,
  writeJSON,
};
