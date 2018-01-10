function testNoteCreation() {
  var note = new Note("That Keran is so hot right now");
  assert.isTrue('each notes descritption can be retrieved', note.description === "That Keran is so hot right now");
};

testNoteCreation();

function uniqueNoteId() {
  var note = new Note("this is an example of a note that should have an unique id")
  assert.isTrue('each note should have an unique id number', note.id === 1);
}

uniqueNoteId();
