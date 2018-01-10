(function(exports) {

  var idCount = 0;

  function Note(description) {
    this.id = idCount++;
    this.description = description;
  };
  exports.Note = Note;
})(this);
