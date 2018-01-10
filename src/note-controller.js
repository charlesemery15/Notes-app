

// var selecteddiv = document.getElementById('app');
// selecteddiv.innerHTML = "Fuck you Charles";

  (function(exports) {
    function Controller(notepad = new Notepad()) {
      this.notepad = notepad;
      this.notepad.createNote("1234567891012345678901234fdasdfadsfadfadf5678901234567890");
      this.notepad.createNote("Chuppa dfadsadsffdasfadfdafdasfadsfadsfadfadsf");
      this.notepad.createNote("Pesadfasdfadsfadsfadfasdasdfasdfadfadffadsfdfato");

      this.notelistview = new Notelist(this.notepad);
    };

    Controller.prototype.getHTML = function(elementID){
      document.getElementById(elementID).innerHTML = this.notelistview.returnToHTML();
    };

    exports.Controller = Controller;
  })(this);

window.onload = function(){

controller = new Controller();
controller.getHTML('app');

};
