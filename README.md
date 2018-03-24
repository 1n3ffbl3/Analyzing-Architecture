# MVC_list Branch

This code is a simply organized, basic application.  Though it is made of modular components there is only one application built from this code.

### Index
* [Apps](#apps)
* [Install Instructions](#install-instructions)
* [File Structure](#file-structure)
* [Build-Time Diagram](#build-time-diagram)
* [Home](https://github.com/elewa-student/Analyzing-Architecture/tree/master)

---

## Apps

This folder only contains one app.  It's a basic browser app with an HTML file that requires some JS and runs them when the Window loads:
* [MVC_list](./MVC_list.md)

---

## Install Instructions

Clone the code to your computer.  That's all.  No installing or building necessary.

[TOP](#index)

---

## File Structure

Nothing remarkable here, just a single folder with all of the files at the top level. 

_App.html_ is the entry point.  It requires all of the other files and builds them together when the Window Object is done loading.

```
MVC_list
|
+-- app.html
|	* Entry point to the application
|
+-- controller.js
+-- handler.js
+-- model.js
+-- README.md
+-- view.js

```

[TOP](#index)

___

## Build-Time Diagram

![](./mvc_list-build-time-diagram.png)


[TOP](#index)



___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
