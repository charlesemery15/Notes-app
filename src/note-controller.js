

// var selecteddiv = document.getElementById('app');
// selecteddiv.innerHTML = "Fuck you Charles";

  (function(exports) {
    function Controller(notepad = new Notepad()) {
      this.notepad = notepad;
      this.notepad.createNote("Favourite drink: seltzer");
      this.notepad.createNote("Chuppa chuuups");
      this.notepad.createNote("Pesto");

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

/* testing

test new controller is instatiated

mock the element by creating a fake div with id app*/
