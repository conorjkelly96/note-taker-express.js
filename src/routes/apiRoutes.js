const { Router } = require("express");

const { addNoteToList, getNotes } = require("../controllers/api");

const router = Router();

router.post("/notes", addNoteToList);
router.get("/notes", getNotes);

module.exports = router;
