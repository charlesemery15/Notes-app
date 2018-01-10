function testSingleNoteView() {
  var note = new Note("test");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue("single note viewer returns html of single note", singleNoteView.returnToHTML() == '<p>test</p>');
};

testSingleNoteView();
