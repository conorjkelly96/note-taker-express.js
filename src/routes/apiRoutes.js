const { Router } = require("express");

const {
  getUserNotes,
  postUserNotes,
  updateUserNotes,
  deleteUserNotes,
} = require("../controllers/api");

const router = Router();

router.get("/notes", getUserNotes);
router.post("/notes", postUserNotes);
router.put("/notes/:id", updateUserNotes);
router.delete("/notes/:id", deleteUserNotes);

module.exports = router;
