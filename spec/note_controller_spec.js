function testControllerIsInstantiated(){
  

  var controller = new Controller();
  // console.log(controller);
  var html = controller.notelistview.returnToHTML();


  controller.getHTML('app');

  // console.log(html);
  // console.log("html above, get element below");
  // console.log(document.getElementById('app').innerHTML);
  assert.isTrue("app div contains html of the description of the notes", document.getElementById('app').innerHTML === html);
};

testControllerIsInstantiated();
