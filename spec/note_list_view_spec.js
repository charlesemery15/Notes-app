function testNoteListContainsNotePad() {
  var notepad = new Notepad();
  var notelist = new Notelist(notepad);
  assert.isTrue("Notelist contains notepad", notelist.currentNotepad === notepad);
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
  assert.isTrue("Returning notes", test === "<ul><li>Hi Keran</li><li>Hi Tom</li></ul>")
};

testReturnsNoteList();


function limitViewTo20Chars() {
  // fakeNote = {
  //   description : 'example description should be limited'
  // };
  var note1 = new Note("example description ijdafijdfs");
  var notepad = new Notepad();
  notepad.addNote(note1);
  var notelist = new Notelist(notepad);
  assert.isTrue("It should limit the note to twenty characters", notelist.twentyChars(note1) === 'example description ');
};

limitViewTo20Chars();
