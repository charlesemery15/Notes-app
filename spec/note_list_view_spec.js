function testNoteListContainsNotePad() {
  var notepad = new Notepad();
  var notelist = new Notelist(notepad);
  assert.isTrue(notelist.currentNotepad === notepad);
};

testNoteListContainsNotePad();

function testReturnsNoteList() {
  var note1 = new Note("Hi Keran");
  var note2 = new Note("Hi Tom");
  var notepad = new Notepad();
  notepad.addNote(note1);
  notepad.addNote(note2);
  var notelist = new Notelist(notepad);
  var test = notelist.returnToHTML();
  assert.isTrue(test === "<ul><li>Hi Keran</li><li>Hi Tom</li></ul>")
};

testReturnsNoteList();
