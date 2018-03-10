var handler = {
  setup: function() {
    controller.model = model;
    controller.view = view;
    var addTextBTN = document.getElementById('clickBTN');
    addTextBTN.addEventListener('click', function() {
      var textInput = document.getElementById('textBox').value; // George
      controller.addText(textInput);
      controller.print();
      console.log('click');
    });
  }
};