// import fs and path modules for reading and writing purposes
const fs = require("fs");
const path = require("path");

// read from JSON file and return array of notes
const readFromFile = (fileName) => {
  const jsonData = fs.readFileSync(
    path.join(__dirname, `../src/db/${fileName}.json`),
    "utf-8"
  );
  return JSON.parse(jsonData);
};

// validate POST body & create new note object
const writeToFile = (fileName, data) => {
  fs.writeFileSync(
    path.join(__dirname, `../src/db/${fileName}.json`),
    JSON.stringify(data)
  );
};

module.exports = {
  readFromFile,
  writeToFile,
};
