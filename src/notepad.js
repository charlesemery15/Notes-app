(function(exports) {
  function Notepad() {
    this.notes = [];
  };

  Notepad.prototype.addNote = function(note) {
    this.notes.unshift(note);
  };

  exports.Notepad = Notepad;
})(this);
