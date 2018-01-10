(function(exports) {
  function Notelist(notepad) {
    this.currentNotepad = notepad;
  };

  Notelist.prototype.twentyChars = function(note) {
    return note.description.substring(0, 19);
  };

  Notelist.prototype.returnToHTML = function() {
    var list = this.currentNotepad.returnNotes()
    .map(note => note.description)
    .join('</li><li>');
    return '<ul><li>' + list + '</li></ul>';
  };

  exports.Notelist = Notelist;
})(this);
