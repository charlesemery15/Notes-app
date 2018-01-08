(function(exports) {
  function Notelist(notepad) {
    this.currentNotepad = notepad;
  };

  Notelist.prototype.returnToHTML = function() {
    var list = this.currentNotepad.notes.join('</li><li>');
    return '<ul><li>' + list + '</li></ul>';
  };

  exports.Notelist = Notelist;
})(this);
