const fs = require("fs");
const path = require("path");

// read from JSON file and return array of notes
const getNotes = () => {
  const jsonData = fs.readFileSync(
    path.join(__dirname, `/db/${fileName}.json`),
    "utf-8"
  );
  const data = JSON.parse(jsonData);
  return data;
};

// validate POST body & create new note object
const createNote = () => {
  fs.writeFileSync(path.join(__dirname, `/db/${fileName}.json`), data);
};

// read from JSON, check note exists & remove note
const deleteNotes = () => {};

module.exports = {
  getNotes,
  createNote,
  deleteNotes,
};
