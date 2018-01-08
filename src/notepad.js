(function(exports) {
  function Notepad() {
    this.notes = [];
  };

  Notepad.prototype.addNote = function(note) {
    this.notes.push(note);
  };

  Notepad.prototype.returnNotes = function() {
    // this.notes.forEach(function(note){
    //   return note;
    // });
    return this.notes;
  };

  exports.Notepad = Notepad;
})(this);
