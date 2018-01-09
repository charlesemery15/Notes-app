window.onload = function(){

// var selecteddiv = document.getElementById('app');
// selecteddiv.innerHTML = "Fuck you Charles";

  (function(exports) {
    function NoteController(notepad = new Notepad()) {
      this.notepad = notepad;
      this.notepad.createNote("Favourite drink: seltzer");
      this.notepad.createNote("Chuppa chuuups");
      this.notepad.createNote("Pesto");

      this.notelistview = new Notelist(this.notepad);

      // document.getElementById('app').innerHTML = "Favourite drink: seltzer";
    };

    NoteController.prototype.getHTML = function(){
      // var madeup = document.getElementById('app');
      // var blargh = this.notelistview.returnToHTML();
      // madeup.innerHTML = blargh;
      document.getElementById('app').innerHTML = this.notelistview.returnToHTML();

    };

    exports.NoteController = NoteController;
  })(this);

controller = new NoteController();
controller.getHTML();

};
