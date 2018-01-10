(function(exports) {
 function SingleNoteView(note) {
   this.note = note;
 };

 SingleNoteView.prototype.returnToHTML = function() {
    return '<p>' + this.note.description + '</p>';
 };

 exports.SingleNoteView = SingleNoteView;
})(this);
