var controller = {
  view: {},
  model: {},
  addText: function(param1) {
    // textInput George
    this.model.addText(param1);
  },
  print: function() {
    this.view.display(this.model.text); //George
  }
};