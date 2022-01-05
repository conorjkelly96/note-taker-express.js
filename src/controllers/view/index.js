const path = require("path");

// render notes.html page
const renderNotes = (req, res) => {
  console.log(res);
  const filePath = path.join(__dirname, "../../../public/notes.html");
  res.sendFile(filePath);
};

// render notes.html page
const renderHome = (req, res) => {
  console.log(res);
  const filePath = path.join(__dirname, "../../../public/index.html");
  res.sendFile(filePath);
};

module.exports = {
  renderHome,
  renderNotes,
};
