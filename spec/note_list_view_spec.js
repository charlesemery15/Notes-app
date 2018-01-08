function testNoteListContainsNotePad() {
  var notepad = new Notepad();
  var notelist = new Notelist(notepad);
  assert.isTrue(notelist.currentNotepad === notepad);
};

testNoteListContainsNotePad();
