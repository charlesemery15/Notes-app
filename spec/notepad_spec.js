function testNotepadCreation() {
  var notepad = new Notepad();
  assert.isTrue(notepad.notes.length === 0);
};

testNotepadCreation();
