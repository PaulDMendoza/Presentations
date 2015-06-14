AngularJS - Beyond the basics
====================
Tech Setup
-----------
Go to C:\git\Presentations\AngularJS\demoApp

Run **npm start** to start app

Navigate to http://localhost:3000/index.html


(1 mins) Summary
-------
Summary: Paul Mendoza will show how to build advanced, well designed and performant AngularJS applications. This will cover a quick introduction to AngularJS and then dive into the deep portions of AngularJS that often confuse developers building AngularJS applications. We'll cover topics such as factories, services, directives, minification concerns, $apply vs $digest, routing, proper link handling and more. 

Paul Mendoza is a software development manager and has been building both consumer and enterprise web applications for over ten years. 


(2 mins) My Background
-------------
Took existing non-AngularJS enterprise application and have been adding AngularJS to it over the last couple years.

Created an application from scratch using AngularJS. This is a single page application.

Development experience on both front end and backend. 

(3 min) Our Goal
--------
- Quick introduction to the basics of AngularJS.
- Why AngularJS is useful compared to alterntiaves
- Advanced topics you should know will be most of the talk 
- Q: How many have used AngularJS before?
- Q: How many have used AngularJS on an existing application?
- Q: How many have used AngularJS to build an single page application?
- Development Enviornment
	- Visual Studio Code IDE
	- NodeJS for server
	- TypeScript for intellisense

(5 mins) Why AngularJS?
--------------
- Developed by 2009 and maintained now by emloyees at Google. 
- Complete framework to build an app. 
- You could build an entire app with AngularJS
- Don't need any jQuery (ie finding things by IDs)
- Less JavaScript
- Easier for designers - HTML to define data layout meaning easier for designers
- Bind user interfaces directly to POJO (Plain Old JavaScript Objects) 
- Write less code
- Easy to get started with
- AngularJS can be the complete app or just in parts of a page

(5 mins) AngularJS Basics
----------------
- **Open SimpleForm**
- Goal: As you type your name in, it should display "Hello [your name]"
- notice importing AngularJS, only framework you need
- notice ng-app tag, explain angularJS application
add "ng-model="yourName"" to input field
- add "{{yourName}}"
- text field
- typing in field shows 
- jQuery vs this example
- Advanced: **show on blur** ng-model-options="{ updateOn: 'blur' }"
- Advanced ** show debounce**
	- Useful when posting requests to a server as the user types. 

(10 mins) Form Validation
------------------
- **Open SimpleForm2**
- notice form with submit button
- notice "ng-submit" logic to increment counter
- GOAL: Prevent form submission until at least 5 characters in textbox
- add "required minlength="10"" to the input field
- demo form not being submitted
- add ng-disabled="form2.$error" to button to disable submit button
- demo button being disabled
- add coloring of field
- add the status fields

(10 mins) Controllers, Binding and more
-----------------
- AngularJS is an MVC framework and all we've dealt with is the View part of MVC
- explain **ng-app="myApp"**
- explain the **ng-controller="myController"** syntax and show controller
- explain basics of scope
- demo **{{name}}** binding scenario
	- explain setting $scope on the backend
- demo **event handler** scenario
	- explain **ng-click**
- demo **json** scenario
	 - explain **ng-repeat**
- demo **$http request for json** scenario
	 - explain $http	

Scope Inheritance Demo
----------------------
- **scopes** folder
- explain the concept of $scope
	- The application model. 
	- Context for expressions. 
	- Arranged in a hierarchy
	- Scopes can watch expressions and propagate events

Scopes Repeaters 2
------------------
-**scopes2** folder
- open code, show code and then open page to see it. Click and notice nothing happens.
- Q: What will happen?
- explain ng-repeat and scopes
- add {{counter}} to each button
- set the default value for the counter to 27
- things that make new scopes
	- ng-controller
	- ng-form
	- ng-repeat
	- ng-switch
	- ng-view

Scopes - watchers
------------------
- **scopes3** folder
- scenario: sometimes you need to watch a property for changes
- explain how watchers work
	- if not bound to the UI, a watcher isn't generated
	- can watch just a single object, a collection or deep into an object's properties
- demo watcher example of new and old value
- demo watcher count example
- demo :: fast binding syntax and demo

Scopes - Apply/Digest
----------------------
- **scopes4** folder
- demo the counter not incementing but the console printing the message
- explain setInterval doesn't know about AngularJS's update mechanism, AngularJS doesn't poll for updates
- show using $scope.$appy()
	- generally bad practice
	- 95% of the time there is a better way 
	- show better way by checking the $$phase
- use $interval service instead of setInterval
- 



Controller Service/Factor Injectiong and Minification
-----------------------------------------------
- DON'T SHOW DEMO YET!!!
- Show the javascript and html first.
- Q: What do you do you think the third {{name}} will have printed to the screen?
- show how an object can be modified up the chain

Form validation
---------------
- Goal: Require the user to input a name greater than 5 characters
- Add the "button" snippet

Watchers and :: binding
----------------------
In AngularJS 1.3 one direction binding added using :: syntax. 

Performance
-----------
Use Benchpress to test performance. JavaScript to benchmark performance for AngularJS. 


Links
-----
ng-src instead of src

ng-href instead of href

Factories and Services
----------------------
$http, $routeProvider and others are examples of factories and services

Auto injected into controller based on name using JavaScript reflection


Handling minification with controllers
--------------------------------------
Minification renames inputs to controllers. So our factories and services can't be auto injected.


Directives
----------
If writing $(element) in controller you need a directive		
	
	
Summary
------
- thank you
- what we learned
	- form validation
	- blur vs debounce
	-  
