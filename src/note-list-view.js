(function(exports) {
  function Notelist(notepad) {
    this.currentNotepad = notepad;
  };

  Notelist.prototype.twentyChars = function(note) {
    return note.description.substring(0, 20);
  };

  Notelist.prototype.returnToHTML = function() {
    var list = this.currentNotepad.returnNotes()
    .map(note => this.twentyChars(note))
    .join('</a></li><li><a href="">');
    return '<ul><li><a href="">' + list + '</a></li></ul>';
  };

  Notelist.prototype.returnToHTML = function() {
    var list = this.currentNotepad.returnNotes();
    var string = "";
    for (var i = 0; i < list.length; i++){
      string += "<li><a href='./' + i + "
    }
  }

  exports.Notelist = Notelist;
})(this);
