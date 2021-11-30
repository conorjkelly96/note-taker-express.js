// importing util functions to get, create & delete notes
const {
  getNotesFromFile,
  createNoteFromFile,
  deleteNotesFromFile,
} = require("../../utils");

const addNoteToList = async (req, res) => {
  const { note } = req.body;

  if (!note) {
    return res.status(400).json({ error: "Invalid note id" });
  }

  const data = await getNoteById(note);

  if (data) {
    const notes = getNotesFromFile("favourites");
    notes.push(data);
    writeDataToFile("notes", JSON.stringify(notes));
    return res.json({ data: "Successfully added note." });
  }

  return res.status(500).json({ error: "Something went wrong." });
};

const getNotes = (req, res) => {
  const userNotes = getNotesFromFile("notes");

  return res.json({ data: userNotes });
};

module.exports = {
  addNoteToList,
  getNotes,
};
