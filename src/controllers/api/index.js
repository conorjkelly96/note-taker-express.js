// Importing UUID for the generation of note IDs and utility functions to read and write to db.json.
// DeprecationWarning: uuidv4() is deprecated. Use v4() from the uuid module instead.
const { v4: uuidv4 } = require("uuid");
const { readFromFile, writeToFile } = require("../../utils");

// facilitating the GET request in the API routes
const getUserNotes = (req, res) => {
  try {
    res.json(readFromFile("db"));
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// facilitating the POST request in the API routes
const postUserNotes = (req, res) => {
  try {
    // read from db.json in ../../db
    const noteData = readFromFile("db");

    // extract Note Tile and Note Text from user interface data
    const { title, text } = req.body;

    // use uuidv4 to add a randomly generated ID to the note
    const id = uuidv4();

    // to create a new note, pass a title, text and id - pass to db.json
    const newNote = { title, text, id };
    writeToFile("db", [newNote, ...noteData]);

    res.json(newNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Oops, something went wrong..." });
  }
};

// facilitating the PUT request in the API routes
const updateUserNotes = (req, res) => {
  try {
    // get the object data from db.json
    const noteData = readFromFile("db");

    // only require the note title and note text from the request
    const { title, text } = req.body;

    const { id } = req.params;

    // const noteNumber = data.filter((each) => each.id === id);
    const noteNumber = data.findIndex((each) => each.id === id);

    noteData[noteNumber].title = title;
    noteData[noteNumber].text = text;

    // update the note in db.json
    writeToFile("db", noteData);

    res.status(200).json({ message: "Your note has been updated." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Oops, something went wrong..." });
  }
};

// https://www.tabnine.com/code/javascript/functions/express/Express/delete
// facilitating the DELETE request in the API routes
const deleteUserNotes = (req, res) => {
  try {
    const { id } = req.params;
    const noteToDelete = readFromFile("db").filter((note) => note.id !== id);
    writeToFile("db", noteToDelete);
    res.status(200).json({ message: "Your note has been deleted." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Oops, something went wrong..." });
  }
};

module.exports = {
  getUserNotes,
  postUserNotes,
  updateUserNotes,
  deleteUserNotes,
};
