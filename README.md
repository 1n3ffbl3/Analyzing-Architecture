# MVC_list

This is a uselessly simple application, it takes text from a text box and adds it to a list displayed in the DOM.  

A User can:
* Add phrases to a comma separated list.
* Read the words submitted up to now.

Use cases:
* Writing contracts because you can't delete something once it's written.
* Learning the MVC architecture.

### Index
* [Use Instructions](#use-instructions)
* [File Structure](#file-structure)
* [Sourcecode Specs](#sourcecode-specs)
* [Build-Time Diagram](#build-time-diagram)
* [Run-Time Specs](#run-time-specs)
* [Home](https://github.com/elewa-student/Analyzing-Architecture/tree/master)

---

## Use Instructions

Clone the code to your computer, open 'app.html' with your browser, and you're off!

[TOP](#index)

---

## File Structure

Nothing remarkable here, just a single folder with all of the files at the top level. 

_App.html_ is the entry point.  It requires all of the other files and builds them together when the Window Object is done loading.

```
MVC_list
|
+-- app.html
|		* Entry point to the application
|
+-- controller.js
+-- handler.js
+-- model.js
+-- README.md
+-- view.js

```

[TOP](#index)

---

## Sourcecode Specs

app.html
```
REQUIRES: controller.js, handler.js, model.js, view.js
EXPORTS: nothing
BEHAVIOR: Calls _handler.setup()_ when the Window loads.  This builds all of the objects together and initializes the app so users can add words to a list.
```
controller.js
```
REQUIRES: nothing
EXPORTS: nothing
BEHAVIOR: defines the controller object

controller: Object
  PROPERTIES: 2
    view: Object
      INITIALIZED: empty
    model: Object
      INITIALIZED: empty
  METHODS: 2
    addText:
      ARGS: 1
        param1: String
          PURPOSE: to be added to the model
      RETURN: undefined
      BEHAVIOR: calls this.model.addText() with 'param1' as argument
  print:
      ARGS: 0
      RETURN: undefined
      BEHAVIOR: calls this.view.display() with this.model.text

```
handler.js
```
REQUIRES: nothing
EXPORTS: nothing
BEHAVIOR: defines the handler object

handler: Object
  METHODS: 1
    setup:
      ARGS: 0
      RETURN: undefined
      BEHAVIOR: Sets the controller's 'view' and 'model' properties. 
      	Attaches an event listener to the button under the text box.
```
model.js
```
REQUIRES: nothing
EXPORTS: nothing
BEHAVIOR: defines the model object

model: Object
  PROPERTIES: 1
    text: String
    INITALIZED: empty
  METHODS: 1
    addText: 
      ARGS: 1
        param1: String
        PURPOSE: To be set as this.text
      RETURNS: undefined
      BEHAVIOR: Resets this.string to the parameter value
```
view.js
```
REQUIRES: nothing
EXPORTS: nothing
BEHAVIOR: defines the view object

view: Object
  PROPERTIES: 0
  METHODS: 1
    display: 
      ARGS: 1
        text: String
        PURPOSE: to be appended into the DOM
      RETURNS: undefined
      BEHAVIOR: Takes in a string and concatenates it 
      		into the innerHTML of the 'printline' div
```


[TOP](#index)

---

## Built-Time Diagram

![](./MVC_list-build-time-diagram.png)

[TOP](#index)

---

## Run-Time Specs

After initialization and durring runtime, the objects being used to run the application are not the same as in the sourcecode.  You can see this with the "Watch" feature in your browser's debugger.  

Eventually you will learn to keep track of this in your mind.  You know you've made it as a programmer when you can track the _state_ of your application as it runs.

```
controller: Object
  PROPERTIES: 2
    view: Object
      PROPERTIES: 0
      METHODS: 1
        display: 
          ARGS: 1
           text: String
           PURPOSE: to be appended into the DOM
        RETURNS: undefined
        BEHAVIOR: Takes in a string and concatenates it 
        		into the innerHTML of the 'printline' div
    model: Object
      PROPERTIES: 1
        text: String
  METHODS: 1
    addText: 
      ARGS: 1
        param1: String
        PURPOSE: To be set as this.text
      RETURNS: undefined
      BEHAVIOR: Resets this.string to the parameter value
    METHODS: 2
      addText:
        ARGS: 1
          param1: String
          PURPOSE: to be added to the model
        RETURN: undefined
        BEHAVIOR: calls this.model.addText() with 'param1' as argument
      print:
        ARGS: 0
        RETURN: undefined
        BEHAVIOR: calls this.view.display() with this.model.text

			        
```

[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>