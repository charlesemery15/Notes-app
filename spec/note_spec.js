function testNoteCreation() {
  var note = new Note("That Keran is so hot right now");
  assert.isTrue(note.description === "That Keran is so hot right now");
};

testNoteCreation();
