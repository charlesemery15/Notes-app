function testNotepadCreation() {
  var notepad = new Notepad();
  assert.isTrue(notepad.notes.length === 0);
};

testNotepadCreation();

function testAddNoteToNotePad() {
  var notepad = new Notepad();
  var note = new Note();
  notepad.addNote(note);
  assert.isTrue(notepad.notes[0] === note);
};

testAddNoteToNotePad();

function testReturnNotes(){
  var notepad = new Notepad();
  var note1 = new Note("Hi Keran");
  var note2 = new Note("Hi Tom");
  notepad.addNote(note1);
  notepad.addNote(note2);
  var test = notepad.returnNotes();
  assert.isTrue(test[0] === note1);
  assert.isTrue(test[1] === note2);
};

testReturnNotes();
