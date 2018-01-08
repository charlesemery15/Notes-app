function testNotepadCreation() {
  var notepad = new Notepad();
  assert.isTrue(notepad.notes.length === 0);
};

testNotepadCreation();

function testReturnNotes() {
  var notepad = new Notepad();
  var note = new Note();
  notepad.addNote(note);
  assert.isTrue(notepad.notes[0] === note);
};

testReturnNotes();
